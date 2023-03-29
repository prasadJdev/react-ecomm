import React from "react";
import { addCart, delCart, rmvCart } from "../../redux/action";
export default function CartProduct({ cartProduct, dispatch }) {
  const handleRemove = () => {
    dispatch(rmvCart(cartProduct));
  };
  const handleReduce = (e) => {
    if (cartProduct.qty === 0) return;
    dispatch(delCart(cartProduct));
  };
  const handleAdd = () => {
    dispatch(addCart(cartProduct));
  };

  return (
    <div className="cartProductContainer row">
      <img
        src={cartProduct.image}
        className="img-fluid col-3 p-2"
        alt={cartProduct.title}
      />
      <div className="cartProductDescription col-7 p-2">
        <p>{cartProduct.title}</p>
        <p>
          Quantity:
          <br />
          <button className="btn btn-light" onClick={handleReduce}>
            -
          </button>
          <span> {cartProduct.qty}</span>{" "}
          <button className="btn btn-light" onClick={handleAdd}>
            +
          </button>
        </p>
        <p>Item - Price: ₹ {cartProduct.price}</p>
        <p>Sub - Total: ₹ {cartProduct.sub_total}</p>
      </div>
      <div
        className="col-md-2 d-flex p-2"
        style={{ flexDirection: "column", justifyContent: "space-around" }}
      >
        <button className="btn btn-outline-danger" onClick={handleRemove}>
          Remove
        </button>
        {/* <button className="btn btn-light">Buy Now</button> */}
      </div>
    </div>
  );
}
