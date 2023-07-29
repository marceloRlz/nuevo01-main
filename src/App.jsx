/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import { CarritoProvider } from "./carritocontext/CarritoContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>sitio en Construccion</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
