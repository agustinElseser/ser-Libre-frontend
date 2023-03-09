import React, { useContext, useEffect } from "react";
import PauseOnHover from "../componentes/Carrusel";
import { Suscripcion } from "../componentes/Suscripcion";
import AppContext from "../context/AppProvider";

const Inicio = () => {
  const { path, changePath } = useContext(AppContext);

  useEffect(() => {
    changePath("inicio");
  }, []);

  console.log(path);
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    //
  };
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById("embed-iframe");
    let options = {
      uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
    };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div className="containerVideo">
        <video loop autoPlay muted className="video">
          <source
            src="https://res.cloudinary.com/mostarq/video/upload/v1675713596/serLibreApp/ljkx5v8onbplw5qheeyj.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h1 className="title">
        <span className="span serLibre">
          <img
            src="https://res.cloudinary.com/mostarq/image/upload/v1675720936/serLibreApp/zkhsuvjqos5npgefmvy0.png"
            alt=""
          />
        </span>

        <span className="span serLibre lucianaElseser">
          <img
            src="https://res.cloudinary.com/mostarq/image/upload/v1675720934/serLibreApp/wugthtd80fxqhuqak3jj.png"
            alt=""
          />
        </span>
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/episode/6Yoj74zj807arDv6TLfgB1?utm_source=generator&theme=0&t=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
      <br />
      <br />
      <img
        className="imgShadow"
        src="https://res.cloudinary.com/mostarq/image/upload/v1676490911/serLibreApp/gpo3q1xhffxfkacrqvuw.jpg"
        alt="cacao"
      />
      <br />
      <br />
      <br />
      <h10>Membresia Ser Libre</h10>
      <p className="textoParrafos boxParrafos">
        <hr />
      </p>
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
      <br />
      <br />
      <Suscripcion />
      <br />
      <br />
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
      <br />
      <br />
      <h10>Recomendados para vos</h10>
      <PauseOnHover />
      <br />
      <br />
      <p className="textoParrafos boxParrafos">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae
        quibusdam obcaecati nulla sequi reprehenderit dolor expedita rerum,
        harum minus pariatur laborum id, fuga maiores? Iste iusto molestias
        voluptatem quia.
      </p>
    </>
  );
};

export default Inicio;
