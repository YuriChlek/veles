"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var PORT = process.env.API_PORT || '5000';
var app = express();
app.listen(PORT, function () { return console.log("Server Connected to port ".concat(PORT)); });
