/* eslint-disable react/prop-types */
import { useState } from "react";
import "../item/ItemStyle.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="count-box">
        <button className="count" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <p> {contador} </p>
        <button className="count" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
      </div>

      <button className="count-num" onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al Carrito{" "}
      </button>
    </>
  );
};

export default ItemCount;
