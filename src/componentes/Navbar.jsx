import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cacao from "./Cacao";
import Online from "./Online";
import Presencial from "./Presencial";
import { home, cacao, presencial, online, LucianaPerfil } from "./Svg";
import "animate.css";

const Navbar = ({ classNameNav }) => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    active: "0",
    desactive: "0",
  });

  const toggleMenu = (id) => {
    var { active } = menu;

    if (id === "") {
      setMenu({ active: "0", desactive: "0" });
    } else if (id !== active) {
      setMenu({ active: id, desactive: active });
    } else if (id == active) {
      setMenu({ active: "0", desactive: id });
    }
  };
  const goNavigate = (id) => {
    var { active } = menu;
    if (id == 1) {
      navigate("/");
      setMenu({ active: "0", desactive: active });
    } else if (id == 5) {
      navigate("/luciana");
      setMenu({ active: "0", desactive: active });
    }
  };

  return (
    <>
      <div
        className={
          menu.active == 2
            ? "animate__animated animate__fadeInUp menus"
            : "animate__animated animate__fadeOutDown menus"
        }
      >
        <Online props={(menu, setMenu)} />
      </div>

      <div
        className={
          menu.active == 3
            ? "animate__animated animate__fadeInUp menus"
            : "animate__animated animate__fadeOutDown menus"
        }
      >
        <Cacao props={(menu, setMenu)} />
      </div>

      <div
        className={
          menu.active == 4
            ? "animate__animated animate__fadeInUp menus"
            : "animate__animated animate__fadeOutDown menus"
        }
      >
        <Presencial props={(menu, setMenu)} />
      </div>

      <div className={classNameNav}>
        <button
          id="1"
          className="navflex"
          onClick={(e) => goNavigate(e.target.id)}
        >
          <span id="1" className="buttonNav">
            {home}
          </span>
          INICIO
        </button>
        <button
          id="2"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span id="2" className="buttonNav">
            {online}
          </span>
          ONLINE
        </button>
        <button
          id="3"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span id="3" className="buttonNav">
            {cacao}
          </span>
          CACAO
        </button>
        <button
          id="4"
          className="navflex"
          onClick={(e) => toggleMenu(e.target.id)}
        >
          <span id="4" className="buttonNav">
            {presencial}
          </span>
          PRESENCIAL
        </button>
        <button
          id="5"
          className="navflex"
          onClick={(e) => goNavigate(e.target.id)}
        >
          <span id="5" className="buttonNav">
            <LucianaPerfil />
          </span>
          LUCIANA
        </button>
      </div>
    </>
  );
};

export default Navbar;
