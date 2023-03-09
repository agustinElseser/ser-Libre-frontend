import { Corazon } from "../../componentes/Svg";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppProvider";
import { AnimationOnScroll } from "react-animation-on-scroll";

const CeremoniaPersonal = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("ceremonia-personal");
  }, []);
  return (
    <>
      <div className="boxDorada">
        <h1>Ceremonia de Cacao </h1>
        <h2>Personalizada</h2>
        <h3>Presencial u online</h3>
      </div>
      <p className="textoParrafos">
        En el siguiente link tenes toda la información sobre el Cacao
        Ceremonial/Medicinal y las Ceremonias de Cacao:
      </p>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__shakeX"
        animateOut="animate__shakeX"
        duration="0.9"
        delay="0"
        animatePreScroll={false}
        className="textAnimation textoParrafos"
      >
        <NavLink
          className=" buttonBuyMov center"
          onClick={() => {
            setTallerId(1);
          }}
          to="/ceremonia-grupal"
        >
          VER MÁS
        </NavLink>
      </AnimationOnScroll>

      <p className="textoParrafos">
        Esta es una oportunidad para vivir una Ceremonia de Cacao personalizada
        exclusivamente para vos, o puede ser también para parejas, madre e
        hija/s, amigas, equipo de trabajo, etc.
      </p>

      <h5>INCLUYE:</h5>
      <ul className="animation animate__animate animate__fadeInDownBig">
        <li>
          <Corazon />
          Limpieza y armonización energética
        </li>
        <li>
          <Corazon />
          Círculo de palabra
        </li>
        <li>
          <Corazon />
          Toma de Cacao e intención
        </li>
        <li>
          <Corazon />
          Oráculo
        </li>
        <li>
          <Corazon />
          Meditación
        </li>
      </ul>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos "
      >
        <p>
          En el caso de que la Ceremonia sea online necesitarás conseguir tu Kit
          Cacao para ese día, puede ser en cualquier lugar verificando que sea
          de grado ceremonial. Te ofrecemos también el nuestro:
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__shakeX"
        animateOut="animate__shakeX"
        duration="0.9"
        delay="0"
        animatePreScroll={false}
        className="textAnimation textoParrafos"
      >
        <NavLink
          className=" buttonBuyMov center  "
          onClick={() => {
            setTallerId(1);
          }}
          to="/productos"
        >
          KIT CACAO
        </NavLink>
      </AnimationOnScroll>

      <h5>Información</h5>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos "
      >
        <p>Duración: 1.30 hs</p>

        <p>
          Para reservar tu espacio podes abonar el 50% o 100% del valor total.
        </p>

        <p>
          El 100% del valor de la Ceremonia debe estar saldado 2 días antes de
          la fecha de nuestro encuentro.
        </p>

        <p>
          La seña no se devuelve, podes volver a agendar en otra fecha dentro de
          los 2 meses siguientes, abonando el valor restante del total.
        </p>
      </AnimationOnScroll>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        COMPRO
      </NavLink>
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos "
      >
        <p>
          Te espero con mucha alegría para compartir este momento único y
          sagrado con la energía amorosa del Cacao. Gracias
        </p>

        <p>Con amor, Lu</p>
      </AnimationOnScroll>
    </>
  );
};

export default CeremoniaPersonal;
