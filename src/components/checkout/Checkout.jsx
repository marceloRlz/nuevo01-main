/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import { CartContext } from "../../carritocontext/CarritoContext";
// eslint-disable-next-line no-unused-vars
import { db } from "../../data/Config";
import { collection, addDoc } from "firebase/firestore";
import "../form/FormStyle.css";

function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CartContext);
  const manejoFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos ");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error ");
      });
  };

  return (
    <div>
      <h2> Checkout </h2>

      <form onSubmit={manejoFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.nombre} x {producto.cantidad}{" "}
            </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <div>
          <hr />\
          <div className="form">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Telefono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email Confirmacion</label>
            <input
              type="email"
              value={emailConfirmacion}
              onChange={(e) => setEmailConfirmacion(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}> {error} </p>}
          <button type="submit" className="form-sub">
            {" "}
            Finalizar Compra{" "}
          </button>
        </div>
      </form>

      {ordenId && (
        <strong> Gracias por tu compra Tu número de orden es {ordenId} </strong>
      )}
    </div>
  );
}

export default Checkout;
