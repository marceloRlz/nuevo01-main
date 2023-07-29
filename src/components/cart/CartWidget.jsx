/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./CartWidgetstyle.css";
import CartRed from "../../../public/img/cartRed.png";
import { CartContext } from "../../carritocontext/CarritoContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cantidadTotal } = useContext(CartContext);
  return (
    <div>
      <Link to="/cart">
        <img className="carrito" src={CartRed} alt="carrito" />

        {cantidadTotal > 0 && (
          <strong className="cart-in">{cantidadTotal}</strong>
        )}
      </Link>
    </div>
  );
}
