import React from "react";
// style
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./FormInputStyle.jsx";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className="form-input-label">{label}</FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}
