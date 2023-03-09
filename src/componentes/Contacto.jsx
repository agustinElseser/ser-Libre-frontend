import { useState } from "react";
import Alerta from "./Alerta.jsx";

const Contacto = () => {
  const [consulta, setConsulta] = useState({
    name: "",
    email: "",
    tel: "",
    coment: "",
  });

  const [alerta, setAlerta] = useState({});
  const { msg } = alerta;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setConsulta({ ...consulta, [name]: value });
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ consulta });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ consulta }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setConsulta({
          name: "",
          email: "",
          tel: "",
          coment: "",
        });
      });
  };

  return (
    <form className="formulario" autoComplete="off" onSubmit={submitEmail}>
      <input
        autoComplete="off"
        placeholder="Nombre"
        className={consulta.name ? "input change" : "input"}
        name="name"
        type="text"
        value={consulta.name}
        onChange={handleChange}
      />

      <input
        autoComplete="off"
        type="email"
        className={consulta.email ? "input change" : "input"}
        placeholder="Correo electrónico"
        name="email"
        value={consulta.email}
        onChange={handleChange}
      />

      <input
        autoComplete="off"
        type="tel"
        className={consulta.tel ? "input change" : "input"}
        placeholder="Número de teléfono"
        name="tel"
        value={consulta.tel}
        onChange={handleChange}
      />

      <textarea
        autoComplete="off"
        className={consulta.coment ? "input change" : "input"}
        placeholder="Escribe un comentario..."
        cols={5}
        rows={10}
        name="coment"
        value={consulta.coment}
        onChange={handleChange}
      ></textarea>

      <div className="boxvacia">{msg && <Alerta alerta={alerta} />}</div>
      <button type="submit" className="button" value="ENVIAR CONSULTA">
        ENVIAR CONSULTA
      </button>
    </form>
  );
};

export default Contacto;
