import React from "react";
import "./CheckoutProduct.css";
import CloseIcon from "@mui/icons-material/Close";

function CheckoutProduct({ id, title, image, price, info }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <div className="checkoutProducr_disc">{info}</div>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="close">
        <CloseIcon />
      </div>
    </div>
  );
}

export default CheckoutProduct;
