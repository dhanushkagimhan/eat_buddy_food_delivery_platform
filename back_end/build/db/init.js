"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
require("dotenv/config");
const isDev = process.env.NODE_ENV === "development";
const dbInit = () => Promise.all([
    models_1.User.sync({ alter: isDev })
]);
exports.default = dbInit;
