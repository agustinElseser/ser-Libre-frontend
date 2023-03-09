import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const svgArrowClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    height="20"
    width="20"
    viewBox="0 0 256 512"
  >
    <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
  </svg>
);

const svgArrowOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    height="20"
    width="20"
    viewBox="0 0 320 512"
  >
    <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
  </svg>
);

const Online = (props) => {
  const [prog, setProg] = useState(false);
  const toggleprog = () => {
    setProg(!prog);
  };
  return (
    <>
      <nav className="nav">
        <button onClick={toggleprog} className="navItem" to="/cacaolovers">
          Programas On Demand - A tu ritmo
          <div
            style={
              prog ? { width: "30px", marginBottom: "5px" } : { width: "30px" }
            }
          >
            {prog ? svgArrowOpen : svgArrowClose}
          </div>
        </button>
        {prog ? (
          <div className="navItem2">
            <NavLink
              className="navItem"
              onClick={() => setMenu({ active: "0", desactive: active })}
              to="/cacaolovers1"
            >
              A tu ritmo:1
            </NavLink>
            <NavLink
              className="navItem"
              onClick={() => setMenu({ active: "0", desactive: active })}
              to="/cacaolovers2"
            >
              A tu ritmo:2
            </NavLink>
            <NavLink
              className="navItem"
              onClick={() => setMenu({ active: "0", desactive: active })}
              to="/cacaolovers2"
            >
              A tu ritmo:3
            </NavLink>
          </div>
        ) : (
          ""
        )}
        <NavLink
          className=" navItem"
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/membresia"
        >
          Membresía Ser Libre - En vivo
        </NavLink>
        <NavLink
          className=" navItem"
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/armonizacionenergetica"
        >
          Armonización energética - A distancia
        </NavLink>
        <NavLink
          className="navItem "
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/sesion"
        >
          Sesión 1 a 1 - En vivo
        </NavLink>
        <NavLink
          className="navItem "
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/acompañamiento"
        >
          Acompañamiento por 2 meses - En vivo
        </NavLink>
      </nav>
    </>
  );
};

export default Online;
