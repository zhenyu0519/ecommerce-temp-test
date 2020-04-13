import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: auto;
    width: 80%;
  }
`;

export const Subtitle = styled.span`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    margin: auto;
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;