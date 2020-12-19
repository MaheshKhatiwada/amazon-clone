import React, { useState }from 'react'
import "./Login.css";
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(error=>alert(error.message))
  
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth)
          history.push("/");
      })
      .catch(error => alert(error.message));
        
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          
          <button onClick={signIn} type="submit" className="login__signInButton">Sign-In</button>
          <p>
            By signing-in ,you agree to Amazon's Conditions of Use & Sale.Please see our Policy Notice.
          </p>
          <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </form>
      </div>
      
    </div>
  )
}

  export default Login;
