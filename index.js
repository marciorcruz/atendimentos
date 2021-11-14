const express = require('express');
const cors = require('cors');
const app = express();

const conn = require("./config/database_config");
const startdb = require("./config/database_start");

const start = new startdb.Database();
start.init(conn);



 
app.use(cors());
app.use(express.json());
app.listen(3333);