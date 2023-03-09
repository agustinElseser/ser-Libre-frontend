import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [path, setPath] = useState({ path: "base" });
  const [tallerId, setTallerId] = useState(null);

  const changePath = (path = "") => {
    setPath({ path: path });
  };

  const [buy, setBuy] = useState("");
  const [links, setLinks] = useState("");

  //leer el taller que selecciono
  const selectBuy = (e, link) => {
    event.preventDefault();
    if (e === buy) {
      setBuy("");
    } else {
      setBuy(e);
      setLinks(link);
    }
  };

  return (
    <AppContext.Provider
      value={{
        path,
        changePath,
        setTallerId,
        tallerId,
        selectBuy,
        buy,
        links,
        setLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
