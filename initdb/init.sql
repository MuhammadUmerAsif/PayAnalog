/**
*Create the ebay_product table
*/
CREATE TABLE ebay_product (
    id  serial primary key,
    product_name varchar(1000) null,
    price        varchar(255) null,
    link         varchar(10000) null,
    image_url    varchar(255) null,
);

/**
* Insert some data 
*/

INSERT INTO ebay_product (product_name, price, link, image_url)
VALUES
    ('Hair and Beard Straightener Brush For Women and Men, Ionic Hair Straightening.','$12.99', 
    'https://www.ebay.com/itm/363189860419?hash=item548fcd7843:g:LG8AAOSwtdpdw6ra&amdata=enc%3AAQAIAAAA8EoCj7b1AcFpUlcPP97kLh0psnOqq9BPSUs9%2F2FFDfZAt1%2FJTQBf5lJ%2F%2BPCcfaYlsUP0N20eXuNP3f8H8XJZ4p0oGl5cuY3O8zwWtCZ2Ohw1VLhqnynGPJja0tTHMVgW6b%2FXY9jlkNmlnquPAAdsS0hgxvKMsyeiq1dxWCblsyHniR1BDQfJR7FehDwsIe9A%2F4jJNVzbULhAlfvRzkK8r8CrAerifHgogHX7WXWmfC77Rvy3ZhciDE8%2FfiBegqbx1S6lIjDf9FMDUFf%2Bs6KipsyClRVaswpaCMXMWdZRizRoHg78jmoBj7rRgFKZmJsWVA%3D%3D%7Ctkp%3ABFBMzNTvieN',
    'https://i.ebayimg.com/thumbs/images/g/LG8AAOSwtdpdw6ra/s-l225.webp'
    ),
    ('Hair and Beard Straightener Brush For Women and Men, Ionic Hair Straightening.','$12.99',
     'https://www.ebay.com/itm/363189860419?hash=item548fcd7843:g:LG8AAOSwtdpdw6ra&amdata=enc%3AAQAIAAAA8EoCj7b1AcFpUlcPP97kLh0psnOqq9BPSUs9%2F2FFDfZAt1%2FJTQBf5lJ%2F%2BPCcfaYlsUP0N20eXuNP3f8H8XJZ4p0oGl5cuY3O8zwWtCZ2Ohw1VLhqnynGPJja0tTHMVgW6b%2FXY9jlkNmlnquPAAdsS0hgxvKMsyeiq1dxWCblsyHniR1BDQfJR7FehDwsIe9A%2F4jJNVzbULhAlfvRzkK8r8CrAerifHgogHX7WXWmfC77Rvy3ZhciDE8%2FfiBegqbx1S6lIjDf9FMDUFf%2Bs6KipsyClRVaswpaCMXMWdZRizRoHg78jmoBj7rRgFKZmJsWVA%3D%3D%7Ctkp%3ABFBMzNTvieNi', 
    'https://i.ebayimg.com/thumbs/images/g/LG8AAOSwtdpdw6ra/s-l225.webp');
