const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
const cors = require('cors');

app.use(cors());
app.use(multer().none());
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

// router file
const email = require('./emails/email-v1');
const email2 = require('./emails/email-v2');
const email3 = require('./emails/email-v3');

app.use('/v1', email);
app.use('/v2', email2);
app.use('/v3', email3);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});