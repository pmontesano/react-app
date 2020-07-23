const express = require("express");
const router = express.Router();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const template = require("../template");
const Home = require("../../views/home");
const { Children } = require("react");

module.exports = function () {
  router.get("/", (req, res) => {
    const initialState = {
      name: "Pablo Montesano",
    };

    const html = template(
      "home",
      ReactDOMServer.renderToString(React.createElement(Home, initialState)),
      initialState
    );

    res.send(html);
  });

  router.get("/descripcion", (req, res) => {
    res.render("Descripción!");
  });

  return router;
};
