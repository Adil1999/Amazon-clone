import React from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {

  const customEnterAnimation = {
    from: { transform: "scale(0.5, 1)" },
    to: { transform: "scale(1, 1)" },
  };

  const [{ basket }, ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="img"
        />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          <FlipMove enterAnimation={customEnterAnimation}>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
