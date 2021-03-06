import React from "react";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import "./AuthReg.styles.sass";

const AuthReg = () => (
  <div className="auth-reg">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthReg;