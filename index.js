const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const {general}=require('./config/general_config')
//Port
const port =3002 || general.port

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//Routes
const webRoutes = require('./routes/web');
app.use('/api',webRoutes)

app.listen(port, () => {

        console.log(`loading on the port ${port}`);
});


  