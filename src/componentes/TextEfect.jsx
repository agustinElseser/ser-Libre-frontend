import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./TextAnim.css";

const TextAnim = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
      <CSSTransition
        in={showText}
        timeout={500}
        classNames="text-anim"
        unmountOnExit
      >
        <div className="text">Text Animation</div>
      </CSSTransition>
    </div>
  );
};

export default TextAnim;
