import { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51I14lMLNV0e0lpJ9SvuTfYS9yX6BgEjUFyslMr3G66Pjqqi5pNgHGEnVsI8vhj066neThsCYpekKbaG30AKlvlS100xoTubsaF");

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user:authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user:null,
        })
      }
   })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route to path="/login">
            <Login />
          </Route>
          <Route to path="/checkout">
            <Header/>
            <Checkout />
            </Route>
          <Route to path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
            </Route>
          <Route path="/">
              <Header/>
              <Home/>
            </Route>
         </Switch>
      </div>

    </Router>
  );
}

export default App;
