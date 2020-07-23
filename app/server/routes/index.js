const express = require("express");
const router = express.Router();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const template = require("../template");
const Home = require("../../views/home");

module.exports = function () {
  router.get("/", (req, res) => {
    const name = "Pablo Montesano";

    res.send(
      template(
        "home",
        ReactDOMServer.renderToString(React.createElement(Home)),
        name
      )
    );
  });

  router.get("/descripcion", (req, res) => {
    res.render("Descripción!");
  });

  return router;
};
