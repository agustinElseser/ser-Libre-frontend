import { useState } from "react";

export const Suscripcion = () => {
  const [suscripcion, setSuscripcion] = useState({
    name: "",
    email: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setSuscripcion({ ...suscripcion, [name]: value });
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ suscripcion });
    const response = await fetch("http://localhost:3001/suscripcion", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ suscripcion }),
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
        setSuscripcion({
          name: "",
          email: "",
        });
      });
  };

  return (
    <form className="suscripcion" autoComplete="off" onSubmit={submitEmail}>
      <div className="suscripcionItems">
        <input
          autoComplete="off"
          placeholder="Nombre completo"
          className={suscripcion.name ? "input change" : "input"}
          name="name"
          type="text"
          value={suscripcion.name}
          onChange={handleChange}
        />
        <input
          autocomplete="off"
          placeholder="Correo electrónico"
          className={suscripcion.email ? "input change" : "input"}
          name="email"
          type="text"
          value={suscripcion.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" className="button" value="INSCRÍBETE">
          INSCRÍBETE
        </button>
      </div>
    </form>
  );
};
