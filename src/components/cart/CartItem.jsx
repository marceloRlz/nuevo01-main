/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CartContext } from "../../carritocontext/CarritoContext";
import { useContext } from "react";
import "../item/ItemStyle.css";

export default function CartIem({ item, cantidad }) {
  const { eliminarProducto } = useContext(CartContext);
  return (
    <div>
      <h4>{item.nombre}</h4>

      <p>Cantidad:{cantidad}</p>
      <p>Precio:{item.precio}</p>
      <button className="t-compra" onClick={() => eliminarProducto(item.id)}>
        Eliminar
      </button>
      <hr />
    </div>
  );
}
