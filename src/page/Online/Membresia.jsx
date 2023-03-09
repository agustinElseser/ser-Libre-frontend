import { Corazon } from "../../componentes/Svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../../context/AppProvider";

export const Membresia = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("membresia");
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [textoaparece, setTextoaparece] = useState(false);

  useEffect(() => {
    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    if (scrollY > 250) {
      setTextoaparece(true);
    } else {
      setTextoaparece(false);
    }
  }, [scrollY]);

  return (
    <>
      <div className="boxDorada">
        <h1>Membresía Ser Libre</h1>
        <h2>Online - En Vivo</h2>
        <h3>11 encuentros en directo</h3>
      </div>
      <p className="textoParrafos ">
        Comenzamos el Sábado 11/03/23 <br /> Finalizamos el 20/05/23
      </p>
      <ul className="animation animate__animate animate__fadeInDown">
        <h4>Un espacio para conectar con:</h4>

        <li>
          <Corazon />
          La calma
        </li>
        <li>
          <Corazon />
          La pausa
        </li>
        <li>
          <Corazon />
          La paz interna
        </li>
        <li>
          <Corazon />
          La suavidad
        </li>
        <li>
          <Corazon />
          La relajación
        </li>
        <li>
          <Corazon />
          La liviandad
        </li>
        <li>
          <Corazon />
          La introspección
        </li>
        <li>
          <Corazon />
          El silencio
        </li>
        <li>
          <Corazon />
          Tu poder interior
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
          Y permitirnos darnos ese espacio en la semana para conectar con
          nuestro mundo interno, dejar afuera el mundo de afuera, y amorosamente
          empezar a enriquecer la conexión con nosotros mismos, con nuestro ser,
          y mantenernos juntos en una frecuencia de paz y amor, en medio del
          caos externo. Para bajar los decibeles del mundo acelerado, de un
          mundo que nos pide más y más, y qué nos quiere todo el tiempo haciendo
          y siendo productivos.
        </p>
        <p>
          Estamos todo el día todos los días expuestos a miles de estímulos e
          info, este espacio no es para llenarnos de más información, es para
          vaciarnos, para recargarnos.
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
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Este es un espacio para conectar con el SER, en vez del hacer, para
          parar, regular nuestro sistema nervioso, y auto-darnos ese momento de
          serenidad, y recordar lo importante, lo valioso, lo verdadero.
        </p>
        <p>
          Todo es bienvenido, vení como estés, conectate aunque estés sintiendo
          estrés, angustia, enojo, frustración, pasando por un momento difícil.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Este espacio es para sostenernos. Nada que hacer, nada que decir,
          simplemente ser y estar. Tu presencia es lo más valioso. Nos
          encontraremos en vivo por zoom 1 hora los sábados de 9 a 10am.
        </p>
        <p>
          Los encuentros quedarán grabados durante los 3 meses y se enviarán por
          un canal de telegram.
        </p>
        <p>Son 11 encuentros durante Marzo, Abril y Mayo.</p>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          En todos los encuentros habrá meditación, en algunos también quizás
          compartiré experiencias que esté viviendo en el momento y sean
          enriquecedoras para todos, en otras abriremos círculo de palabra si
          así lo sentimos, pero principalmente nos centraremos en estar aquí y
          ahora, en el presente, y conectarnos con nuestra paz y poder interior.
        </p>
      </AnimationOnScroll>
    </>
  );
};
