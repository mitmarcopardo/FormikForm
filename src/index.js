import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function SignUp(){
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');

  function handle(){
      console.log('Email: ', email);
      console.log('Pw: ', pw);
  }
  return(
      <> {/* The "<>" indicates  JSX format or syntax, so all code in JS needs to be wrap (open and close) whit these symbols */}       
      <div>Email</div>
      <input type="text"  value={email} onChange={ e => setEmail(e.target.value) }/>
      <div>Password</div>
      <input type="text"  value={pw} onChange={ e => setPw(e.target.value) }/>
      <button onClick={handle}>Submit</button>
      </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
