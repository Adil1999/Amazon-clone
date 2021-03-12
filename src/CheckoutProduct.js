import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import {useSnackbar} from "notistack";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(({ id, image, title, price, rating, hideButton }, ref) => {
  const [{ }, dispatch] = useStateValue();
  const {enqueueSnackbar}  = useSnackbar();

  const removeFromBasket = () => {
    // remove the item from the basket
    
    let variant =  "error";

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    const truncate = (title) =>
      title.length > 20 ? `${title.substring(0, 20)}...  ` : title;

    enqueueSnackbar(truncate(title) + "Product removed from Basket", { variant });

  };

  return (
    <div ref={ref} className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
});

export default CheckoutProduct;
