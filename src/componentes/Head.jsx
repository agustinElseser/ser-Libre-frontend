import React, { useContext, useEffect } from "react";
import AppRouter from "../route/AppRouter";
import AppContext from "../context/AppProvider";
import { Redes } from "./Redes";
import Logo from "../assets/logo.svg";
import "../App.css";
import "animate.css";

const Head = () => {
  const { path, changePath } = useContext(AppContext);
  const verPath = Object.values(path);

  return (
    <>
      <div className="cabecera">
        <img src={Logo} className="logo " alt="logo" />
        {verPath == "inicio" ? <Redes /> : ""}
      </div>
    </>
  );
};

export default Head;
