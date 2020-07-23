require("@babel/register");
require.extensions['.scss'] = () => {};
const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();

// cargar las routas
app.use("/", express.static(path.resolve(__dirname, "../../build")));
app.use("/", routes());

app.listen(3000);
