import React from "react";
import user_png from "../images/user.png";
import email_png from "../images/email.png";
import locked_computer from "../images/locked-computer.png";
const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_png} alt="" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email_png} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={locked_computer} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      
    </div>
  );
};
export default LoginSignup;
