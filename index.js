// if(NODE_ENV !== "production") {
    require("dotenv").config();
// };
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const indexRouter = require("./src/routers/index");

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", exphbs({defaultLayout: "main", extname:"hbs"}));
app.set("view engine", "hbs");

app.use('/', indexRouter);

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}`
    );
});