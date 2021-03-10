import React from 'react';
import {useState} from 'react';
import './Payment.css';
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { Unstable_TrapFocus } from '@material-ui/core';


function Payment() {
    
    const [{basket, user}, ] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState();
    const [disabled, setDisabaled] = Unstable_TrapFocus;


    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>

          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>44000, Flat#003, Ground Floor,</p>
              <p>F.E.C.H.S, E-11, Islamabad</p>
            </div>
          </div>

          {/* Payment section - Review Items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Payment section - Payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              {/* Stripe magic will go */}

              {/* <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
