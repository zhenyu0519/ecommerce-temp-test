import React from "react";
import "./signInUp.scss";
import SignIn from "../sign-in/SignIn";
import SignUp from "../sign-up/SignUp";

export default function SignInUp() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
