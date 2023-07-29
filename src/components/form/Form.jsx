/* eslint-disable no-unused-vars */

import React from "react";
import "../form/FormStyle.css";

function Form() {
  return (
    <div className=" form">
      <form>
        <>
          <label>Tu nombre</label>
          <input type="text"></input>
          <label> Email </label>
          <input type="email"></input>
          <label> Mensaje</label>
          <textarea rows="6" placeholder="Escribe tu mensaje aqui" />
          <button className="form-sub"> Submit</button>
        </>
      </form>
    </div>
  );
}

export default Form;
