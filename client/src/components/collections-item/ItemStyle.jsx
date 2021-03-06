import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const CollectionImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  &:hover {
    & ${CollectionImage} {
      opacity: 0.8;
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      opacity: unset;
    }
    button {
      opacity: unset;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const Name = styled.span`
  width: 80%;
`;

export const Price = styled.span`
  width: 20%;
  text-align: right;
`;

export const AddItemButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 220px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 5px;
  }
`;
// .collection-item {
//   width: 22vw;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   overflow: hidden;
//   position: relative;

//   .image {
//     width: 100%;
//     height: 95%;
//     background-size: cover;
//     background-position: center;
//     margin-bottom: 5px;
//   }

//   .custom-button {
//     width: 80%;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     display: none;
//   }

// &:hover {
//   .image {
//     opacity: 0.8;
//   }

//   .custom-button {
//     opacity: 0.85;
//     display: flex;
//   }
//   }

//   .collection-footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 18%;
//     }
//   }
// }
