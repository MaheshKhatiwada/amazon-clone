import React,{useState,useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from "./reducer";
import { useStateValue } from './StateProvider';
import "./Payment.css";
import { Link,useHistory } from 'react-router-dom';
import {CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from "./axios";
import {db} from "./firebase";

function Payment() {
  const [{ }, dispatch] = useStateValue();
  const history = useHistory();
  const [{ basket, user }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succedded, setSuccedded] = useState(false);
  const [clientSecret, setClinentSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClinentSecret(response.data.clientSecret); 
    }
    getClientSecret();
  }, [basket])
  console.log("the client secret is >>>>.", clientSecret);

  const handleSubmit =async(e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card:elements.getElement(CardElement),
      }
    }).then(({ paymentIntent }) => {

      db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created:paymentIntent.created,
        })
      setSuccedded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type:"EMPTY_BASKET",
      })

      history.replace("/orders");
    })
  };
  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout"> { basket?.length} items</Link>)
        </h1>
        <div className="payment__content">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Chanaute Road</p>
            <p>Lamachaur Pokhara</p>
          </div>
        </div>
        <div className="payment__content">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
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
        <div className="payment__content">
          <div className="payment__title">
            <h3>Payment Method </h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                    <CurrencyFormat
                      renderText={( value ) => (
                        <>
                          <h3> Order Total :{value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                  />
              </div>
              <button disabled={processing||disabled||succedded}>
                <span >
                  {processing?<p>Processing </p>: "Buy Now"}
                </span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;
