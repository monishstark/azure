import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ title, image, price, disc }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_disc">{disc}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <button>remove</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
