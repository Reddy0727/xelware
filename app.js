const express = require('express');
const mongoose = require('mongoose');

const app = express();

require("dotenv").config();
const cors = require('cors')


     
const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

const port = process.env.PORT || 8000;
const quotationRoute = require('./routes/quotation')

const uri = 'mongodb+srv://narendra:CE5N1SWUkSRvqVbv@xelware.pjpgngo.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));



app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({ createParentPath: true }));
app.use(express.json());
app.use('/api',quotationRoute)
app.use(express. urlencoded({extended:false}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 next();
});

 app.get('/',(req,res)=>{
  res.send('welcome')
 });

 
 app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});