import { Corazon } from "../../componentes/Svg";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppProvider";

const Acompañamiento = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("acompañamiento");
  }, []);
  return (
    <>
      <div className="boxDorada">
        <h1>MUJER RADIANTE </h1>
        <h2>Acompañamiento por 2 meses</h2>
      </div>
      <div className="boxParrafos">
        <br />
        <p className="textoParrafos">
          1 zoom por semana de 1 hora (8 en total)
        </p>

        <p className="textoParrafos">
          Acceso a las grabaciones durante los 2 meses
        </p>
        <br />
        <p className="textoParrafos">
          Este es un espacio de compromiso mutuo, para que podamos abordar
          diferentes aspectos de tu vida en los cuales quieras enfocarte, y que
          puedas, luego de los dos meses, notar cambios en tu vida, teniendo en
          cuenta que la realidad externa nos devuelve, como un espejo, cómo nos
          sentimos internamente. Así que pondremos nuestro foco en sanar,
          cambiar, trascender, aceptar, evolucionar, con mucha paciencia y amor,
          pero también con acción y determinación.
        </p>
        <p className="textoParrafos">
          Para mí es un honor que me elijas para acompañarte, y será un placer
          que transitemos juntas estos 8 encuentros, y ser testigo de tu propia
          transformación.
        </p>
        <br />
      </div>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        QUIERO
      </NavLink>
      <br />
      <br />
      <h12>Este espacio es para vos si:</h12>
      <div className="boxParrafos">
        <br />
        <li>
          -Queres hacerte cargo de tu vida, tomar responsabilidad y cambiar lo
          que sea necesario para vivir alineada a lo que tu alma desea
        </li>
        <li>
          -Estás dispuesta a soltar el papel de víctima para ser protagonista y
          creadora de tu vida
        </li>
        <li>-Tomar decisiones y pasos incómodos, acompañada y sostenida</li>
        <li>
          -Queres transformar uno o varios aspectos de tu vida (autoestima,
          trabajo, salud, relaciones, dinero, etc.)
        </li>
        <li>
          -Reconoces lo importante que es invertir tu dinero en vos misma, en
          espacios que te apoyen y te impulsen hacia tu nueva versión
        </li>
        <li>
          -Queres hacer un trabajo interno profundo, para dejar de vivir en el
          pasado, para soltar resentimiento, personas, trascender experiencias
          dolorosas, y así empezar a vivir tu vida con propósito, gozo,
          devoción, alegría, amor.{" "}
        </li>
        <li>
          -Queres salir de la frecuencia del miedo, y las narrativas de la
          colectividad, queres cuestionarte todo lo aprendido y establecido, y
          empezar a construir tus propias reglas y creencias
        </li>
        <li>-Tenes muuuchas ganas de transformarte</li>
        <br />
      </div>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        SI ES PARA MI
      </NavLink>
      <div className="boxParrafos">
        <br />
        <p className="textoParrafos">
          Serán dos meses profundos que nos enfocaremos en lo que vos estés
          necesitando, trabajaremos en todo lo que sientas que te esté limitando
          en este momento.
        </p>
      </div>
      <ul className="animation   animate__animate animate__fadeInDown">
        <li>
          <Corazon />
          Amor propio
        </li>
        <li>
          <Corazon />
          Poder personal
        </li>
        <li>
          <Corazon />
          Emprender
        </li>
        <li>
          <Corazon />
          Liderazgo
        </li>
        <li>
          <Corazon />
          Manifestar
        </li>
        <li>
          <Corazon />
          Reprogramar creencias
        </li>
        <li>
          <Corazon />
          Abundancia
        </li>
        <li>
          <Corazon />
          Dinero
        </li>
        <li>
          <Corazon />
          Hábitos
        </li>
        <li>
          <Corazon />
          Relaciones
        </li>
        <li>
          <Corazon />
          Salud
        </li>
        <li>
          <Corazon />
          Pareja
        </li>
      </ul>
      <br />
      <div className="boxParrafos">
        <br />
        <p className="textoParrafos">
          Me emociona mucho abrir este espacio para apoyar a mujeres en su
          expansión. Y me entusiasma pensar en las mujeres que llegarán aquí.
        </p>
        <br />
        <p className="textoParrafos">
          ¿Sentís que este es el espacio que estás necesitando?
        </p>
      </div>
      <br />
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        SÍ, QUIERO
      </NavLink>
      <br />
      <br />
    </>
  );
};

export default Acompañamiento;
