import React from "react";
import "./signInUp.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

export default function SignInUp() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
