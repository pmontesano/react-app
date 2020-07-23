const React = require("react");
const Header = require("../../components/header/header");
require("./home.scss");

const namespace = 'ui-app';

const Home = (props) => {

  const { name } = props;

  return (
  <div className={'ui-app'}>
    pagina home con props {name}
    <Header />
  </div>
  );
};

module.exports = Home;
