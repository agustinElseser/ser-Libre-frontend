import { Corazon } from "../../componentes/Svg";
import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppProvider";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { textAlign } from "@mui/system";

const CeremoniaGrupal = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("ceremonia-grupal");
  }, []);
  return (
    <>
      <div className="boxDorada">
        <h1>Ceremonia de Cacao: </h1>
        <h2>Ábrete Corazón</h2>
        <h3>Presencial</h3>
      </div>
      <h5>PRÓXIMAS FECHAS</h5>

      <ul className="animation animate__animate animate__fadeInDownBig">
        <li>
          <Corazon />
          Sábado 18/3 de 17 a 20 hs en Amatista, Paraná, Entre Ríos
        </li>
        <li>
          <Corazon />
          Sábado 25/3 de 14 a 17 hs en Espacio Gratitud, Crespo, Entre Ríos
        </li>
      </ul>

      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        QUIERO PARTICIPAR
      </NavLink>
      <h5>¿De dónde viene el Cacao Ceremonial?</h5>
      <p className="textoParrafos">
        El cacao es un grano que crece en árboles nativos de América Central,
        cuyo nombre científico es Theobroma cacao que en griego significa
        “Alimento de los dioses”.
      </p>
      <p className="textoParrafos">
        Las ceremonias del cacao han sido realizadas durante miles de años por
        las tribus Mayas y Aztecas de Centro y Sur América, En la sociedad
        azteca las semillas de cacao eran utilizadas como moneda de cambio, y
        sólo lo bebían los miembros de la élite: la casa real, la nobleza, los
        grandes mercaderes y los guerreros.
      </p>
      <p className="textoParrafos">
        Los aztecas sabían que una taza de Cacao eliminaba el cansancio,
        estimulaba las capacidades mentales, y que era una fuente de sabiduría
        espiritual, energía corporal y potencia sexual.
      </p>
      <h5>¿En qué se diferencia del chocolate caliente o cacao amargo?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          El Cacao grado Ceremonial (cacao 100% puro) quiere decir que no ha
          sido sometido a ningún proceso industrial y que conserva sus
          propiedades naturales intactas, pudiendo ser usado en ceremonias para
          maximizar sus poderes.
        </p>
        <p>
          El chocolate comercial procesado desarrollado durante los últimos 200
          años está hecho con cacao tostado, azúcar, leche y otros ingredientes
          que eliminan los compuestos del cacao real en un 99% a 80%.
        </p>
        <p>
          El Cacao Ceremonial/Medicinal proviene de
          Perú/Ecuador/México/Bolivia/Colombia, de plantaciones familiares,
          sostenibles, agroecológicas, orgánicas, y es cultivado y cosechado con
          amor, cuidado, y atención.
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
          Durante todo el proceso de elaboración se realiza con oraciones e
          intencionándolo para que nos contribuya y acompañe en nuestra
          sanación.
        </p>
        <p>
          La preparación del Cacao Ceremonial lleva además variedad de hierbas
          medicinales y miel. Es la alquimia de estos elementos naturales y todo
          el proceso desde su plantación hasta el modo de realizarlo lo que
          produce el efecto final en nosotros.
        </p>
        <p>
          Es una medicina vegetal natural que induce hormonas pero sin
          alucinaciones ni efectos psicodélicos.
        </p>
      </AnimationOnScroll>
      <h5>¿Que es una Ceremonia de Cacao?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Una ceremonia de cacao es una forma de darle a las propiedades del
          cacao, un nivel de respeto, considerándolo sagrado, y crear las
          condiciones emocionales y corporales necesarias para recibir el mayor
          beneficio posible al beberlo. Como todo en la vida, una ceremonia
          requiere de una actitud positiva y abierta. El Cacao Ceremonial
          contiene el balance de componentes y energías ideales que estimulan
          esa unión del espíritu y la vibración del corazón. Sana y activa una
          frecuencia muy especial y amorosa en cada persona.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>Medicina del Corazón.</p>
        <p>
          Esta ceremonia te reconecta con la belleza, la dulzura y el amor que
          reside dentro tuyo. Te contribuye a que recuperes tu poder.
        </p>
      </AnimationOnScroll>
      <h5>
        ¿Por qué te contribuye vivir la experiencia de una Ceremonia de Cacao?
      </h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Ayuda a aumentar el campo energético de nuestros corazones. Cuando se
          consume en grupo, este campo energético se vuelve exponencialmente más
          grande y más efectivo. Incluso si lo haces con extraños, es posible
          que compartan experiencias personales que pueden aportar claridad e
          inspiración a tu propia vida.
        </p>
        <p>
          Cuando un grupo de personas beben cacao juntas, cambian su energía a
          la misma frecuencia o vibración. Genera una experiencia compartida de
          alegría, mayor vitalidad, mayor intuición y empatía, y un corazón más
          abierto y presente.
        </p>
        <p>
          Es un hermoso encuentro en un espacio sagrado que permite una
          verdadera conexión entre nosotros y con algo mucho más grande que
          nosotros mismos.
        </p>
      </AnimationOnScroll>
      <h5>¿Qué esperar al tomar Cacao Ceremonial?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          El cacao tiene un efecto sutil. Trabaja a nivel subconsciente: saca a
          la luz lo reprimido, derriba barreras/limitaciones que te estaban
          bloqueando, pudiendo liberarlas en este entorno seguro, de una forma
          sumamente amorosa y compasiva.
        </p>
        <p>
          Además permite que recibamos inspiración e ideas creativas que pueden
          brindarnos claridad sobre los próximos pasos a dar en nuestra vida.
        </p>
        <p>
          Más la experiencia de cada uno va a ser diferente, y les va a traer
          exactamente lo que necesitan en este momento de sus vidas.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeInUp"
        duration="2"
        delay="1"
        className=" center"
      >
        <ul className="animation center  animate__animate animate__fadeInDown">
          <h2>
            ¿Cuáles son los beneficios de consumir Cacao Ceremonial? (son
            muchísimos, estos son algunos):
          </h2>
          <br />
          <li>
            <Corazon />
            Apertura del chacra corazón, nos conecta con el perdón, la
            compasión, el amor
          </li>
          <li>
            <Corazon />
            Afrodisiaco, aumenta la líbido
          </li>
          <li>
            <Corazon />
            Energizante, vitalizante natural
          </li>
          <li>
            <Corazon />
            Genera entusiasmo, placer, felicidad (antidepresivo)
          </li>
          <li>
            <Corazon />
            Estimula la creatividad
          </li>
          <li>
            <Corazon />
            Brinda claridad mental
          </li>
          <li>
            <Corazon />
            Mejora la concentración y la memoria
          </li>
          <li>
            <Corazon />
            Nutritivo, superalimento (contiene vitaminas, minerales, hierro,
            proteínas, magnesio, potasio y más de 300 compuestos beneficiosos
            para el organismo)
          </li>
          <li>
            <Corazon />
            Fuente de antioxidantes naturales, previene enfermedades cardíacas y
            neurodegenerativas
          </li>
          <li>
            <Corazon />
            Potencia el sistema inmune
          </li>
          <li>
            <Corazon />
            Limpia hígado, riñones e intestinos
          </li>
        </ul>
      </AnimationOnScroll>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        QUIERO PARTICIPAR
      </NavLink>
      <h5>¿Qué incluye la Ceremonia de Cacao?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <li>CEREMONIA PRESENCIAL:</li>
        <p>
          <Corazon />
          Limpieza energética
        </p>
        <p>
          <Corazon />
          Círculo de palabra
        </p>
        <p>
          <Corazon />
          Toma de Cacao
        </p>
        <p>
          <Corazon />
          Meditación 4 elementos con tambor chamánico
        </p>
        <p>
          <Corazon />
          Lectura de mensaje personalizado de oráculo.
        </p>

        <p>
          BONUS:
          <br /> Acceso por hasta 6 mes posterior al encuentro al curso grabado:
          Cacao Lovers, para aprender a preparar tu propio Cacao y seguir
          profundizando con esta medicina como herramienta de autoconocimiento y
          sanación personal.
        </p>
      </AnimationOnScroll>
      <h5>¿Que necesito saber antes de inscribirme?</h5>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          <Corazon />
          No se necesitan conocimientos previos
        </p>
        <p>
          <Corazon />
          Modalidad presencial
        </p>
        <p>
          <Corazon />
          Cupos limitados
        </p>
        <p>
          <Corazon />
          Duración: 3 horas
        </p>
        <p>
          <Corazon />3 horas de ayuno (solo agua)
        </p>
        <p>
          <Corazon />
          Traer una botella de agua, una taza, y ropa cómoda.
        </p>
        <p>Podes reservar tu lugar abonando el 100% o el 50% del valor.</p>
        <p>
          El valor total debe estar saldado una semana previa a la Ceremonia.
        </p>
        <p>
          *La seña no se devuelve en caso de no asistir, podrás participar en la
          próxima fecha.
        </p>
      </AnimationOnScroll>
      <NavLink
        className=" buttonBuyMov  animate__animated  animate__heartBeat "
        onClick={() => {
          setTallerId(1);
        }}
        to="/comprar"
      >
        QUIERO PARTICIPAR
      </NavLink>
      <AnimationOnScroll
        initiallyVisible={false}
        animateIn="animate__fadeIn"
        duration="3"
        delay="1"
        className="textAnimation textoParrafos"
      >
        <p>
          Si sentís el llamado a experimentar con esta poderosa medicina de la
          tierra para la sanción y expansión de tu corazón, te espero
        </p>
        <p>Con amor, Lu</p>
      </AnimationOnScroll>
    </>
  );
};

export default CeremoniaGrupal;
