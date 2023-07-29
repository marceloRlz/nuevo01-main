/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react"; /* eslint-disable no-unused-vars */
import "./ItemListContainerStyle.css";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../data/Config";

function ItemListContainer(props) {
  const [productosRetro, setProductosRetro] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");

    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductosRetro(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <>
      <h2 className="saludo"> {props.greeting}</h2>
      <ItemList productos={productosRetro} />
    </>
  );
}

export default ItemListContainer;
