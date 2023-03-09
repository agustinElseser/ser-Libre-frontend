import Contacto from "./Contacto";
import { Informacion } from "./Informacion";
import { Siguenos } from "./Siguenos";

export const Fooder = () => {
  return (
    <div className="fooder">
      <Contacto />

      <div className="info">
        <Siguenos />
      </div>
      <div className="info">
        <Informacion />
      </div>

      <h3 className="margin-top">
        Desarrollado por Agustin Elseser ® 2023. <br />
        Todos los derechos reservados.
        <br />
        <br />
        <br />
      </h3>
    </div>
  );
};
