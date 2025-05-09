import React from "react";
import "../../pages/App.css";

function Card({ img, name, description, price, onOrder }) {
  return (
    <div className="card">
      <div className="box">
        <div className="gambar">
          <img className="img-a" src={img} alt={name} />
        </div>
        <div className="word">
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h4>{price}</h4>
          <button onClick={() => onOrder(price)} className="orderbutton">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Card;