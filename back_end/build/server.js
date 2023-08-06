"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
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
// router
// testing api
app.get('/', (req, res) => {
    res.json({ message: "Hello from API!" });
});
// server
try {
    app.listen(PORT, () => {
        console.log(`Server is listning PORT: ${PORT}`);
    });
}
catch (error) {
    console.log(`Error occureed: ${error.message}`);
}
