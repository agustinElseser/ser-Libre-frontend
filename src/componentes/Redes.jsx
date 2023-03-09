import "animate.css";
import { WhatsApp, Instagram, Facebook } from "./SvgGradient";

export const Redes = () => {
  return (
    <>
      <div className="redes">
        <a
          target="_blank"
          href="https://www.instagram.com/___serlibre/"
          className="iconRedes"
        >
          <Instagram />
        </a>
        <a
          target="_blank"
          href="https://walink.co/b36582"
          className="iconRedes"
        >
          <WhatsApp />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/lu.elseser?mibextid=LQQJ4d"
          className="iconRedes"
        >
          <Facebook />
        </a>
      </div>
    </>
  );
};
