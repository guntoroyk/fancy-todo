if (process.env.NODE_ENV === 'development') {
    console.log(process.env.NODE_ENV);
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errorHandle } = require('./middlewares/errorHandler');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);
app.use(errorHandle);


app.listen(PORT, () => console.log('app listening on port', PORT));