import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Productos = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="Cabezera box">
        <nav className={`Cabecera-nav box ${menu ? "isActive" : ""}`}>
          <NavLink className="Cabecera-li " to="/cacaolovers">
            Cacao Lovers - Curso grabado
          </NavLink>
          <NavLink className="Cabecera-li " to="/productos">
            Productos
          </NavLink>
          <NavLink className="Cabecera-li " to="/ceremoniagrupal">
            Ceremonia de Cacao grupal
          </NavLink>
          <NavLink className="Cabecera-li " to="/ceremoniapersonal">
            Ceremonia de Cacao personalizada
          </NavLink>
        </nav>
        <button
          onClick={toggleMenu}
          className={`Cabecera-button ${menu ? "isActive2" : ""}`}
        >
          PRODUCTOS
        </button>
      </header>
    </>
  );
};

export default Productos;
