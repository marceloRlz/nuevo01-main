/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Item from "./Item";
import "./ItemListStyle.css";

// eslint-disable-next-line react/prop-types
function ItemList({ productos }) {
  return (
    <>
      <div className="item-container">
        {productos.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
