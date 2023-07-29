/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { useState, createContext, Children } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [carrito, setCarrito] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [cantidadTotal, setCantidadTotal] = useState(0);

  console.log(carrito);

  // eslint-disable-next-line no-unused-vars
  const agregarProducto = (item, cantidad) => {
    // eslint-disable-next-line no-unused-vars
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);
    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      // eslint-disable-next-line no-unused-vars
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id == id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);

    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev -
        productoEliminado.item.productoEliminado * productoEliminado.cantidad
    );
  };
  // eslint-disable-next-line no-unused-vars
  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };
  // eslint-disable-next-line react/jsx-no-undef
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        total,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
