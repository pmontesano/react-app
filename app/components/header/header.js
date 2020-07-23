const React = require("react");

const namespace = "ui-header";

const Header = (props) => {
  const data = [
    "Inicio",
    "Mi enfoque",
    "Consultorio a distancia",
    "Plan alimentario",
    "Turnos",
  ];

  return (
    <div className={namespace}>
      <h1>Lic Florencia Telmo</h1>
      <ul>
        {data.map((element) => {
          return <li>{element} </li>;
        })}
      </ul>
    </div>
  );
};

module.exports = Header;
