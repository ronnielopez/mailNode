require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.use(cors({
  origin: '*'
}))

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

// routes
app.use('/api/sendEmail', require('./email'));

app.get('/', (req, res) => {
  res.send('Hello World: ' + process.env.CORREO);
});

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
