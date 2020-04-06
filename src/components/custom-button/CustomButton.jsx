import React from "react";
import { CustomButtonContainer } from "./CustomButtonStyle";

export default function CustomButton({ children, ...props }) {
  console.log('cscsc',props)
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
