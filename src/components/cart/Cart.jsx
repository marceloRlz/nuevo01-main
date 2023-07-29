/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../carritocontext/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {
  const { carrito, vaciarcarrito, total, cantidadTotal } =
    useContext(CartContext);
  if (cantidadTotal === 0) {
    return (
      <>
        <h2> No hay productos en el carrito </h2>
        <Link className="t-compra" to="/">
          {" "}
          Ver Productos{" "}
        </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3>Total: $ {total} </h3>
      <h3> Cantidad Total: {cantidadTotal}</h3>
      <button className="t-compra" onClick={() => vaciarcarrito}>
        {" "}
        Vaciar Carrito
      </button>
      <Link className="t-compra" to="/checkout">
        Finalizar Compra
      </Link>
    </div>
  );
}
