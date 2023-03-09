import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Presencial = () => {
  return (
    <header className="">
      <nav className="nav">
        <NavLink
          className=" navItem"
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/ceremonia-grupal"
        >
          Ceremonia de Cacao grupal
        </NavLink>
        <NavLink
          className="navItem "
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/ceremonia-personal"
        >
          Ceremonia de Cacao personalizada
        </NavLink>
      </nav>
    </header>
  );
};

export default Presencial;
