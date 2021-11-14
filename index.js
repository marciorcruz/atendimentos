const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));

const conn = require("./config/database_config");
const startdb = require("./config/database_start");

const start = new startdb.Database();
start.init(conn);

require('./routes/clientes')(app);

app.use(cors());
app.use(express.json());
app.listen(3333);