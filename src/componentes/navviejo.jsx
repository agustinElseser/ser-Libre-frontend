import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cacao from "./Cacao";
import Online from "./Online";
import Presencial from "./Presencial";
import { home, cacao, presencial, online, LucianaPerfil } from "./Svg";
import "animate.css";

const Navbar = ({ classNameNav }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    active: "",
    desactive: "",
  });

  const toggleMenu = (id) => {
    if (id === menu.active) {
      setMenu({ active: "", desactive: [id] });
    } else setMenu({ ...menu, active: [id] });
    actionMenu(menu.active);
  };

  const actionMenu = ({ active }) => {
    if ((active = 1)) {
      navigate("/");
    }
    if ((active = 5)) {
      navigate("/luciana");
    }
  };

  return (
    <>
      <div
        className={
          (menu.active = 2
            ? "animate__animated animate__fadeInUp menus"
            : (menu.desactive = 2
                ? "animate__animated animate__fadeOutDown menus"
                : null))
        }
      >
        <Online />
      </div>
      <div
        className={
          (menu.active = 3
            ? "animate__animated animate__fadeInUp menus"
            : (menu.desactive = 3
                ? "animate__animated animate__fadeOutDown menus"
                : null))
        }
      >
        <Cacao />
      </div>

      <div
        className={
          (menu.active = 4
            ? "animate__animated animate__fadeInUp menus"
            : (menu.desactive = 4
                ? "animate__animated animate__fadeOutDown menus"
                : null))
        }
      >
        <Presencial />
      </div>

      <div className={classNameNav}>
        <button
          id="1"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span className="buttonNav">{home}</span>
          INICIO
        </button>
        <button
          id="2"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span className="buttonNav">{online}</span>
          ONLINE
        </button>
        <button
          id="3"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span className="buttonNav">{cacao}</span>
          CACAO
        </button>
        <button
          id="4"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span className="buttonNav">{presencial}</span>
          PRESENCIAL
        </button>
        <button
          id="5"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span className="buttonNav">
            <LucianaPerfil />
          </span>
          LUCIANA
        </button>
      </div>
    </>
  );
};

export default Navbar;
