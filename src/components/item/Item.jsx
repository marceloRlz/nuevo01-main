/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import "./ItemStyle.css";
import { Link } from "react-router-dom";

function Item({ img, nombre, precio, stock, id }) {
  return (
    <div className="card">
      <img className="card-im" src={img} alt={nombre} />
      <div className="card-s">
        <h3> {nombre}</h3>
        <h4>Precio:${precio}</h4>
        <p>Stock:{stock}</p>
      </div>

      <Link className="detalle" to={`/item/${id}`}>
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;
