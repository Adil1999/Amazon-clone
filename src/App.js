import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const promise = loadStripe(
    "pk_test_51IU6vPBX9TOk71F3r2woS72SzmDlc3tGqvMVLlISbY4pZmTQw0pTFqZHXmDoiPhG1Mke9OgfPtq24gbuBhOgMrJq00XnjI5U80"
  );

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER  ==== ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
