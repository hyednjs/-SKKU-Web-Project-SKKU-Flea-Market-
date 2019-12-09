/*global chrome*/
import React, { useState } from 'react';
import './Login.css';

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

function Login(props) {

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  function loginHandler() {

  }

  function registerHandler() {
  }

  return (
    <div class="login-page">
      <img class="logo-img" src="img/logo.png" />
      <div class="form">

        <form class="register-form">
          <h2>REGISTER</h2>
          <input type="text" placeholder="name" name="id" required uired onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="email address" name="email" required onChange={(e) => setEmail(e.target.value)} />
          <button class="create-btn" type="reset" onClick={registerHandler}>create</button>
          <HelpMessage msg="Already registered? " detail="Sign In" />
        </form>

        <form class="login-form">
          <h2>LOGIN</h2>
          <input type="text" placeholder="username" onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <button class="login-btn" type="reset" onClick={loginHandler}>login</button>
          <HelpMessage msg="Not registered? " detail="Create an account" />
        </form>
      </div>
    </div>
  );
}

export default Login;
