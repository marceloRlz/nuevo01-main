/* eslint-disable no-unused-vars */

import "./NavBarStyle.css";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { React, useState } from "react";
import CartWidget from "../cart/CartWidget";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="header">
        <Link className="Title" to="/">
          {" "}
          <h1>Retro Consolas </h1>
        </Link>

        <CartWidget />
        <h2 className="mario">asdfghjkp</h2>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="a"></li>
          <li className="b"></li>
          <li className="a-Up2"></li>
          <li className="b-Up2"></li>
          <li>
            <li className="respon">
              <li>
                <Link className="a-Up" to="/"></Link>
              </li>
              <p className="a-inicio">inicio</p>

              <Link className="b-Up" to="/Contacto"></Link>

              <p className="b-contacto">Contacto</p>

              <Link className="aCircle" to="/categoria/2"></Link>

              <p className="a-juegos">Juegos</p>

              <Link className="bCircle" to="/Categoria/3"></Link>

              <p className="b-consolas">Consolas</p>
            </li>
          </li>
        </ul>
        <ul className="buttons-left"></ul>
        <div className="hambuger" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={25} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </>
  );
}
