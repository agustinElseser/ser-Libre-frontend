import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppProvider";

export const MensajeCompra = () => {
  const { tallerId, links, buy } = useContext(AppContext);

  return (
    <>
      <div className="ventanaEmergente ">
        <div className="boxDorada">
          <h1>asdas</h1>
          <h2>FORMAS DE PAGO</h2>
          <h3>dasda</h3>
        </div>
        <NavLink className="button4" to={"/"}>
          X<button></button>
        </NavLink>
        <div>Envia el pago al siguiente Alias:{links}</div>
      </div>
    </>
  );
};
