const React = require("react");
const Header = require("../../components/header/header");
require("./home.scss");

const namespace = "ui-app";

const Home = (props) => {

  console.log('que trae la props', props);
  const { name } = props;

  return (
    <div className={"ui-app"}>
      pagina home con props {name}
      <Header />
    </div>
  );
};

module.exports = Home;
