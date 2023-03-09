import { Link, NavLink } from "react-router-dom";

const Cacao = (props) => {
  return (
    <>
      <div onMouseLeave={() => props.setMenu3(false)} className="nav">
        <NavLink
          className="navItem"
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/cacaolovers"
        >
          Cacao Lovers - Curso grabado
        </NavLink>
        <NavLink
          className=" navItem"
          onClick={() => setMenu({ active: "0", desactive: active })}
          to="/productos"
        >
          Productos
        </NavLink>
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
      </div>
    </>
  );
};

export default Cacao;
