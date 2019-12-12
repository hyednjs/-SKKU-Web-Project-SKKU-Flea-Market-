import React, { useState } from 'react';
import './Login.css';
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;

function HelpMessage(props) {
  function onScroller() {
    window.$('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
  }

  return (
    <p class="message">
      {props.msg}
      <a href="#" onClick={onScroller}>
        {props.detail}
      </a>
    </p>
  );
}

function Login() {

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function selectOnlyThis(event) {
    const selected_name = event.target.id;
    if (selected_name === "seller1") document.getElementById("buyer1").checked = false;
    if (selected_name === "buyer1") document.getElementById("seller1").checked = false;
    if (selected_name === "seller2") document.getElementById("buyer2").checked = false;
    if (selected_name === "buyer2") document.getElementById("seller2").checked = false;

  }

  return (
    <div class="login-page">
      <img class="logo-img" src="img/flea_market.png" />

      <div class="form">

        <form class="register-form">
          <h2>REGISTER</h2>

          <input type="checkbox" id="seller2" onChange={selectOnlyThis} /><label for="seller2">Seller</label>
          <input type="checkbox" id="buyer2" onChange={selectOnlyThis} /><label for="buyer2">Buyer</label>

          <input type="text" placeholder="name" name="id" onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="email address" name="email" onChange={(e) => setEmail(e.target.value)} />
          <button class="create-btn" type="reset">create</button>
          <HelpMessage msg="Already registered? " detail="Sign In" />
        </form>

        <form class="login-form">
          <h2>LOGIN</h2>

          <input type="checkbox" id="seller1" onChange={selectOnlyThis} /><label for="seller1" >Seller</label>
          <input type="checkbox" id="buyer1" onChange={selectOnlyThis} /><label for="buyer1" >Buyer</label>

          <input type="text" placeholder="username" onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button class="login-btn" type="reset">login</button>
          <HelpMessage msg="Not registered? " detail="Create an account" />
        </form>
      </div>
    </div>
  );
}

export default Login;
