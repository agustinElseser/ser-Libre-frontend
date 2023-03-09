import Navbar from "../componentes/Navbar";
import Head from "../componentes/Head";
import AppRouter from "../route/AppRouter";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppProvider } from "../context/AppProvider";
import { Fooder } from "../componentes/Fooder";

const Layout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBar, setNavBar] = useState(false);
  const [classNameNav, setClassNameNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    setClassNameNav("animate__animated animate__fadeInUp navAbajo");
    if (scrollPosition === 0) {
      setClassNameNav("animate__animated animate__fadeOutDown navAbajo ");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.pageYOffset]);

  return (
    <BrowserRouter>
      <AppProvider>
        <div className="layout">
          <Head />
          <AppRouter />
          <Fooder />
          <Navbar classNameNav={classNameNav} />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
};

export default Layout;
