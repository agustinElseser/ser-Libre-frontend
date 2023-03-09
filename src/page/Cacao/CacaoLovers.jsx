import "animate.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppProvider";
import {
  Circle,
  Facebook,
  Instagram,
  WhatsApp,
} from "../../componentes/SvgGradient";

const CacaoLovers = () => {
  const { path, changePath, setTallerId } = useContext(AppContext);
  const verPath = Object.values(path);

  useEffect(() => {
    changePath("ceremonia-personal");
  }, []);
  return (
    <>
      <div className="boxDorada">
        <h1>Cacao Lovers </h1>
        <h2>Curso online grabado</h2>
      </div>

      <div className="boxParrafos">
        <br />
        <p className="textoParrafos">
          Este curso está diseñado para que profundices con el Cacao Ceremonial
          a nivel experimental a través de encuentros intencionales y de
          prácticas de integración a tu propio ritmo.
        </p>
        <br />
        <p className="textoParrafos">
          El Portal del Cacao te proporciona las herramientas y guía para que
          puedas establecer una relación intencional con el Cacao Ceremonial a
          la vez que ahondas en tu propio interior para transformarte.
        </p>
        <br />
        <p className="textoParrafos">
          Se abren las puertas de un portal de oportunidad, exploración y
          transformación.
        </p>
      </div>
      <br />

      <div className="boxParrafos">
        <hr />
        <h12>Cacao Lovers: Prepará tu propio Cacao</h12>
      </div>
      <ul>
        <li>●Crea tu Altar</li>
        <li>●Limpieza energética</li>
        <li>●4 elementos</li>
        <li>●7 chacras</li>
        <li>●El poder de la intención</li>
        <li>●Relación entre nuestra vibración y hormonas</li>
        <li>●Cacao de grado Ceremonial vs. Cacao industrial:</li>
        <li>●Tip: cargar el agua con cuarzo rosa</li>
        <li>
          ●Opcionalmente agregar una pequeñí- sima cantidad de chile en polvo o
          molido, ya que la capsaicina mejora la absorción de la teobromina,
          principal alcaloide del cacao.
        </li>
      </ul>
      <br />
      <br />
      <div className="boxParrafos">
        <hr />
        <h12>Este Curso es para vos si:</h12>
        <p className="textoParrafos">
          -Querés conectar con esta medicina desde un lugar de respeto y
          apertura.
        </p>
        <br />
        <p className="textoParrafos">
          -Querés comenzar a preparar tu propio Cacao Ceremonial en la comodidad
          de tu casa.
        </p>
        <br />
        <p className="textoParrafos">
          -Querés conectarte con el Cacao como herramienta de autoconocimiento y
          sanación personal.
        </p>
        <br />
        <p className="textoParrafos">
          -Querés sentir sus efectos cada día y potenciarlos, ya que cuanto más
          consumimos una planta maestra, más se integra en nuestro campo áurico
          y más nos conectamos con ella y sentimos sus efectos.
        </p>
      </div>
      <br />
      <br />
      <div className="boxParrafos">
        <hr />
        <h12>Beneficios de consumir Cacao diariamente:</h12>
        <p className="textoParrafos">
          -Aumenta la energía vital, es energizante
        </p>
        <br />
        <p className="textoParrafos">
          -Antioxidante natural, protege el corazón
        </p>
        <br />
        <p className="textoParrafos">-Potencia el sistema inmune</p>
        <br />
        <p className="textoParrafos">-Superalimento, fuente de nutrientes</p>
        <br />
        <p className="textoParrafos">-Desintoxica intestino, hígado, riñones</p>
        <br />
        <p className="textoParrafos">
          -Genera entusiasmo, placer, felicidad (antidepresivo)
        </p>
        <br />
        <p className="textoParrafos">-Afrodisíaco, aumenta la líbido</p>
        <br />
        <p className="textoParrafos">-Estimula la creatividad</p>
        <br />
        <p className="textoParrafos">-Brinda claridad y enfoque mental</p>
        <br />
        <p className="textoParrafos">
          -Abre el chacra corazón, permitiendo que las corazas que nos mantienen
          a la defensiva se ablanden y disuelvan
        </p>
        <br />
        <p className="textoParrafos">
          -Nos conecta con nuestra energía femenina (receptividad, sensibilidad,
          emocionalidad
        </p>
        <br />
        <p className="textoParrafos">
          -Mejora nuestra manera de comunicarnos Mejora las relaciones Activa la
          alegría y el gozo
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
        COMPRO
      </NavLink>
      <br />
      <div className="boxParrafos">
        <p className="textoParrafos">
          Te espero con mucha alegría para compartir este momento único y
          sagrado con la energía amorosa del Cacao. Gracias
        </p>
        <br />
        <p className="textoParrafos">Con amor, Lu</p>
        <br />
      </div>
    </>
  );
};

export default CacaoLovers;
