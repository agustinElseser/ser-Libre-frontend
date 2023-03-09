import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppContext from "../context/AppProvider";
import "animate.css";
import data from "../servidor/data.json";
import { MensajeCompra } from "./MensajeCompra";

const talleres = Object.values(data);

export const ModalBuy = () => {
  const navigate = useNavigate();
  const handleToPreviousPage = () => {
    navigate(-1);
  };

  //leer el path donde esta el usuario
  const { path, changePath } = useContext(AppContext);
  useEffect(() => {
    changePath("comprar");
  }, []);

  //leer el taller que selecciono
  const { tallerId, selectBuy, links, buy, setLinks } = useContext(AppContext);
  const taller = talleres.filter((i) => i.id == tallerId);
  const { titulo, subtitulo, optionsBuy, boton } = taller[0];

  //analiza si hay que redireccionar al usuario a otra page
  const link = (links) => {
    if (links == "ser.libre.lu") {
      return;
    } else {
      window.open(links);
      setLinks("");
    }
  };

  return (
    <>
      <div className="boxDorada">
        <h1>{titulo}</h1>
        <h2>FORMAS DE PAGO</h2>
        <h3>{subtitulo}</h3>
      </div>
      <NavLink className="salir" to={"/"} onClick={handleToPreviousPage}>
        X<button></button>
      </NavLink>
      <h5>Selecciona la forma de pago</h5>
      <div className="sectionBuy animation   animate__animate animate__fadeInDown">
        {optionsBuy.map((option) => (
          <label
            className={buy == option.id ? "buyOptions back" : "buyOptions"}
          >
            <input
              type="radio"
              name={option.link}
              value={option.id}
              onClick={(e, link) => selectBuy(e.target.value, e.target.name)}
            />
            <div>
              {option.valor} {option.moneda}
            </div>
            <p>{option.descripcion}</p>
          </label>
        ))}
        <br></br>
        <NavLink
          onClick={buy == "" ? "" : () => link(links)}
          links={links}
          className={
            buy == ""
              ? "buttonBuyMov diseable animate__animated animate__backInUp animate__heartBeat "
              : "buttonBuyMov animate__animated animate__backInUp animate__heartBeat "
          }
          to={buy == "" ? "" : "/comprar/finalizar"}
        >
          {boton}
        </NavLink>
      </div>
    </>
  );
};
