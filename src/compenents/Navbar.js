import React from "react";

function Navbar(props) {
  return (
    <header className="nav-bar">
      <a href="#">
        <img
          className="logo-docplanner"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
      </a>
      <ul className="nav-menu">
        {props.menuItem.map(function(el, i) {
          if (el.dropdown) {
            return (
              <li key={i} className="menu-title">
                <a href={el.link}>{el.title}</a>
                <div className="dropdown">
                  {el.dropdown.map((elem, j) => (
                    <a key={j} href={elem.link}>
                      {elem.title}
                    </a>
                  ))}
                </div>
              </li>
            );
          } else {
            return (
              <li key={i} className="menu-title">
                <a href={el.link}>{el.title}</a>
              </li>
            );
          }
        })}
      </ul>
    </header>
  );
}

export default Navbar;
