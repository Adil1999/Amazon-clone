import React from "react";
import "./Product.css";
import { useSnackbar } from "notistack";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const { enqueueSnackbar } = useSnackbar();

  //console.log("BAsket: ", basket);

  const addToBasket = () => {

    let variant = "Success";

    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    const truncate = (title) => title.length > 20 ? `${title.substring(0, 20)}...  ` : title;

    enqueueSnackbar(truncate(title) + "Product added into Basket", {variant});


  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
