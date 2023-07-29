/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../item/itemStyle.css";
import ItemCount from "../itemcount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../carritocontext/CarritoContext";
import { useContext } from "react";

function ItemDetail({ img, nombre, precio, stock, id, descripcion }) {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CartContext);

  const manejoCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };
  return (
    <div className="card-2">
      <img className="card-im-2" src={img} alt={nombre} />
      <div>
        <h2 className=" detail-nombre">Nombre: {nombre}</h2>
        <h3 className="precio">Precio: ${precio} </h3>
        <h3>ID: {id} </h3>
        <p className="card2">Descripcion: {descripcion}</p>
        <p className="stock">Stock:{stock}</p>
        {agregarCantidad > 0 ? (
          <Link className="t-compra" to="/cart">
            Terminar compra
          </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejoCantidad}
          />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
