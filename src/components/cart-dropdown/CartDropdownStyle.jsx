import styled from "styled-components";
import { CustomButtonContainer } from "../custom-button/CustomButtonStyle";

export const CartDropdownButton = styled(CustomButtonContainer)`
  margin-top: auto;
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
`;

export const CartItemContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
