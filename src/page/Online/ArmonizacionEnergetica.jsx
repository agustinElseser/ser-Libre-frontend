import { Corazon } from "../../componentes/Svg";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppProvider";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ArmonizacionEnergetica = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("armonizacionenergetica");
  }, []);
  return (
    <>
      <div className="boxDorada">
        <h1>Limpieza energética </h1>
        <h1></h1>
        <h3>Péndulo Hebreo Kabalístico</h3>
        <h3></h3>
      </div>

      <ul className="animation animate__animate animate__fadeInDown">
        <li>
          <Corazon />
          Personas
        </li>
        <li>
          <Corazon />
          Lugares: viviendas, locales comerciales, oficinas, etc.
        </li>
        <li>
          <Corazon />
          Situaciones: sirve para destrabar y solucionar problemas de cualquier
          índole, o potenciar situaciones (ej.: emprendimiento, ventas,
          relaciones, etc.)
        </li>
        <li>
          <Corazon />
          Objetos o plantas/animales
        </li>
      </ul>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        COMPRO
      </NavLink>
      <h5>¿Por qué es necesario realizar una limpieza energética?</h5>

      <p className="textAnimation textoParrafos">
        Así como todos los días cuidamos, limpiamos, y atendemos nuestro cuerpo
        físico, debemos hacer lo mismo con nuestros demás cuerpos, uno de ellos
        el energético. Cuándo tenemos un síntoma, enfermedad o se nos presenta
        una situación en nuestra vida (mundo físico) es porque hay un bloqueo,
        estancamiento, o exceso de energía densa en nuestros demás cuerpos que
        hacen que impacte en nuestra realidad (cuerpo o situación externa) para
        que lo veamos y lo atendamos.{" "}
      </p>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Una de las leyes universales dice que todo está compuesto por energía
          y tiene una vibración. Cuando hablamos de energía densa no es "mala"
          simplemente vibra diferente y produce estancamientos, desbalances y
          diferentes experiencias en nuestra vida, que por lo general no
          deseamos experimentar, y que nos llevan a sufrir. Se siente incluso en
          el cuerpo físico, luego de estar con alguien o en algún lugar, o con
          muchos pensamientos negativos propios, la pesadez, el cansancio,
          agotamiento, dolor de cabeza, etc., y en cambio después de estar con
          alguien que nos contribuye e inspira, o después de meditar o conectar
          con la gratitud, por ejemplo, nos sentimos más alegres, livianos y con
          calma.
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
          Nos cargamos energéticamente con: la energía del miedo, que muchas
          industrias fomentan, energía densa de otras personas, lugares,
          objetos, nuestros propios pensamientos negativos, creencias
          limitantes, programas inconscientes (de nuestro cuerpo mental).
          energía estancada en cada chacra (centro energético) por ejemplo, por
          experiencias dolorosas, represión de emociones, etc. Así vamos
          acumulando toda estas densidades en nuestros cuerpos y seguimos
          repitiendo situaciones que no queremos, sintiéndonos con poca energía,
          desvalorizados, enfermándonos, etc. Todo nace de los demás cuerpos
          sutiles que no vemos. Lo que sucede en nuestra realidad y en nuestro
          cuerpo son señales para atender los demás cuerpos: energético, mental,
          emocional y espiritual.
        </p>
      </AnimationOnScroll>

      <h5>¿Cada cuánto es necesario realizarla?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>Esa respuesta la tenes únicamente vos.</p>
        <p>
          Si querés realizar un proceso más profundo de sanación y limpieza
          puedo recomendarte realizar 4 sesiones seguidas (4 días seguidos, o 1
          vez por semana).
        </p>
        <p>
          Puedo también preguntarle al péndulo cuántas sesiones y cada cuántos
          días sería conveniente realizar la sesión. Igualmente el péndulo es a
          modo de consulta, la respuesta final obviamente siempre la tenes vos y
          es prioridad que sigas tu intuición y sabiduría interna.
        </p>
      </AnimationOnScroll>

      <h5>¿Puedo regalar o pedir una sesión para otra persona?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          En este caso necesitamos el consentimiento de la otra persona para
          respetar su libre albedrío. En el caso de que eso no sea posible o no
          se quiera, puedo preguntar al péndulo si el alma de la persona me
          permite realizar la sanación.
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

      <h5>BENEFICIOS</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <li>
          <Corazon />
          Limpia y armoniza el campo áurico
        </li>
        <li>
          <Corazon />
          Limpia y armoniza los chacras, fortaleciéndolos y potenciando sus
          funciones
        </li>
        <li>
          <Corazon />
          Libera los bloqueos de energía
        </li>
        <li>
          <Corazon />
          Libera emociones reprimidas
        </li>
        <li>
          <Corazon />
          Libera las energías negativas que se adhieren al estar en contacto con
          otras personas y/o lugares
        </li>
        <li>
          <Corazon />
          Elimina energías de baja vibración que nos estén drenando la energía
          (celos, envidias, enojos, rencor, odio, etc.)
        </li>
        <li>
          <Corazon />
          Corta pactos conscientes e inconscientes (cordones energéticos,
          consentimientos) que podamos tener con una persona
        </li>
        <li>
          <Corazon />
          Alivia situaciones de alto estrés emocional (accidentes, depresión,
          duelos, separaciones, angustias, etc.)
        </li>
        <li>
          <Corazon />
          Brinda protección espiritual
        </li>
        <li>
          <Corazon />
          Reduce el estrés y la ansiedad
        </li>
        <li>
          <Corazon />
          Fortalece nuestro ser
        </li>
        <li>
          <Corazon />
          Eleva nuestro autoestima
        </li>
        <li>
          <Corazon />
          Aumenta la energía vital
        </li>
        <li>
          <Corazon />
          Brinda paz y serenidad
        </li>
        <li>
          <Corazon />
          Alivia dolores y síntomas físicos
        </li>
        <li>
          <Corazon />
          Favorece la recuperación de enfermedades y las previene
        </li>
        <li>
          <Corazon />
          Mejora el estado de ánimo.
        </li>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          La sesión la realizo a distancia, tiene exactamente la misma
          efectividad y potencia que presencial, ya que la energía se transmite
          igual, va más allá de tiempo y espacio. La energía puede ser dirigida
          y puesta en movimiento con nuestra intención. Una vez que la finalizo
          te envío la medición de la energía al inicio y al final, y la sanación
          realizada (textualmente del manual).
        </p>
      </AnimationOnScroll>

      <h5>DATOS NECESARIOS</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <li>
          <Corazon />
          Persona: Nombre y apellido (como figura en el DNI) y fecha de
          nacimiento.
        </li>
        <li>
          <Corazon />
          Situación: detalles de la situación a tratar, y lo que quiero que
          suceda. Si es para tu negocio/emprendimiento el nombre del mismo.
        </li>
        <li>
          <Corazon />
          Lugar: domicilio, barrio, ciudad, provincia y país, y nombre (en el
          caso de que sea local comercial)
        </li>
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
    </>
  );
};

export default ArmonizacionEnergetica;
