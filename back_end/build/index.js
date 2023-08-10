"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_1 = __importDefault(require("./api/routes"));
const init_1 = __importDefault(require("./db/init"));
const config_1 = require("./db/config");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080;
(0, config_1.checkDBConnection)();
(0, init_1.default)();
const corOptions = {
    origin: "https://localhost",
    methods: "GET,PATCH,POST,DELETE"
};
// Middleware
app.use((0, cors_1.default)(corOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: "Hello from API!" });
});
// testing api
app.get('/', (req, res) => {
    res.json({ message: "Hello from API!" });
});
// routes
app.use('/v1', routes_1.default);
// server
try {
    app.listen(PORT, () => {
        console.log(`Server is listning PORT: ${PORT}`);
    });
}
catch (error) {
    console.log(`Error occureed: ${error.message}`);
}
