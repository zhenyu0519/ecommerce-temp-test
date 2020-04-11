import React from "react";
// components
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
// style
import { SignInUpContianer } from "./SignInUpPageStyle";
export default function SignInUpPage() {
  return (
    <SignInUpContianer>
      <SignIn />
      <SignUp />
    </SignInUpContianer>
  );
}
