require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.use(cors({
  origin: '*'
}))

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/sendEmail', require('./email'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
