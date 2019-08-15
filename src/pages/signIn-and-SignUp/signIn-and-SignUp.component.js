import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import "./signIn-and-SignUp.styles.scss";

import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="signIn-and-SignUp">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUp;
