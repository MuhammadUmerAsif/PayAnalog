const Ebay_products = require('../model/Ebayproduct')
const puppeteer = require('puppeteer');
const _=require('lodash')

/**
 * Get all the products from database
 */

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Ebay_products.findAll()
        console.log(products)
        if(_.isEmpty(products))
        {
            res.json({message:"There is no data in database"})
        }
        res.json({ data: products })
    } catch (err) {
        console.error(err.message)
    }
}

/**
 * Scrape the ebay product page by searching the product using keyword
 * @param {keyword} req 
 */

exports.scrapeEbayPage = async (req, res) => {
    try {
        const input = req.body
        const data=await scrapeproduct(input.keyword)
        if(data.length>0)
        {
        data.splice(0,1)
        await saveProduct(data)
        res.json({message:"Product Data scrape & saved Successfully"})
        }
        else{
            res.send({message:"Product Not found"})
        }
        }catch(err)
        {
            console.log(err);
        }
}

async function scrapeproduct(keyword){
    try{
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        })
        const page = await browser.newPage()
        await page.goto(`https://www.ebay.com/sch/i.html?_nkw=${keyword}`)
        const scrape_data = await page.$$eval('.s-item', (elements) =>
            elements.map((e) => ({
                product_name: e.querySelector('.s-item__title').textContent.trim(),
                price: e.querySelector('.s-item__price').textContent.trim(),
                link: e.querySelector('.s-item__link').href,
                image_url: e.querySelector('.s-item__image img').src
            }))
        )
    return scrape_data
    }catch(err)
    {
        console.log("Error",err)
    }
}

async function saveProduct(data)
{
    try {
        const is_saved=await Ebay_products.bulkCreate(data)
        console.log('Data insertion successful')
      } catch (error) {
        console.error('Error inserting while data:', error)
      }
}