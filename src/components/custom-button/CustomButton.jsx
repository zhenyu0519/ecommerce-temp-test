import React from "react";
import { CustomButtonContainer } from "./CustomButtonStyle";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
