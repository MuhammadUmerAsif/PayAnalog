# PayAnalog

### TASK

Create a Web Scraper for eBay Products and an API

### Objective: 

Develop a Node.js application using Express that scrapes product data from an eBay products page and stores it in a PostgreSQL database. Then, expose an endpoint to retrieve this data.

## Setup Project

- clone the repo to your local pc
- install the libraries
- ````
  npm install
  ````
- run the project
- ````
  npm start
  ````
- Now setup the database **Note:** Please make sure docker is installed on your pc
- ````
  #run this command
  docker-compose up -d
  ````

## API Reference

 - GET /api/products
   #### Response
   ````
   {
   "data": [
    {
      "id": 1,
      "product_name": "iphone 15 pro max",
      "price": "234",
      "link": "rkerter",
      "image_url": "ndgdsfg",
      "createdAt": "2023-10-09T00:05:00.207Z",
      "updatedAt": "2023-10-09T00:05:01.012Z"
    },
    {
      "id": 182,
      "product_name": "Professional Hair Dryer 2000W Fast Drying Ionic Hairdryer with Diffuser Hairdrye",
      "price": "$32.39",
      "link": "https://www.ebay.com/itm/295953652581?hash=item44e8365b65:g:BzMAAOSw07hlFdiW&amdata=enc%3AAQAIAAAA8HqgdsNLltbmMtM%2Fmbu5%2FuBytPX9Lpw%2F%2BAS8zdlj70IQkwZZ919gEpPJ3tf68rOF3BF%2BzddXBkiVgyGQFx4dVeRrpS%2Fo%2Fjh8418a16lqsFskNRdO%2ByQvuVPLN%2F72nvDByVGPU9w8RaSd0R8IMgl9ZUhngBhx8LIXMTYU8LLyPnWfqF0cRMJdgtVQJ62kZbaSM1o4xy%2FvBtJmMHGCIvgFCLA9Z4EcuAt1cqcFDy80SCOl55BxXJKhaS7Nnk4p%2BThdcSHENOQmWo57mMno1SvRJZW159KyX7ovrhJmLD0J7VJ2ngymigFwNqruWzcCK1rzKg%3D%3D%7Ctkp%3ABFBM6ODfjeJi",
      "image_url": "https://i.ebayimg.com/thumbs/images/g/BzMAAOSw07hlFdiW/s-l300.webp",
      "createdAt": "2023-10-08T19:55:36.953Z",
      "updatedAt": "2023-10-08T19:55:36.953Z"
    },
    ]
    }
   ````
- POST /api/scrape-ebay
  #### Input Model
  ````
  {
    "keyword":"electric hair straitner"
  }
  ````
  #### Response
  ````
  {
  "message": "Product Data scrape & saved Successfull"
  }
  ````
