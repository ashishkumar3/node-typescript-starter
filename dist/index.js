"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// initialize configuration
dotenv_1.default.config();
const app = express_1.default();
const PORT = process.env.SERVER_PORT;
// configure express to use ejs
app.set("views", path_1.default.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    // render index template
    res.render("index");
});
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server running on Port: ${PORT}`);
});
//# sourceMappingURL=index.js.map