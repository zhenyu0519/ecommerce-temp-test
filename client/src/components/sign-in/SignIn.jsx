import React, { useState } from "react";
// redux
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
import { connect } from "react-redux";
// components
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
// style
import { SignInContainer, Title, ButtonContainer } from "./SignInStyle.jsx";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentias] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentias({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <ButtonContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => {
    return dispatch(emailSignInStart({ email, password }));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
