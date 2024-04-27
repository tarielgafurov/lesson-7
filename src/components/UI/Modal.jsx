import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({onClose , onConfirm}) => {
  return (
    <>
    {createPortal(
         <>
         <Backdrop></Backdrop>
         <Card>
           <h3>Are you sure ?</h3>
           <ContainerButtons>
             <button onClick={onConfirm} >YES</button>
             <button onClick={onClose} >No</button>
           </ContainerButtons>
         </Card>
       </>,
       document.getElementById("modal")
    )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  width: 370px;
  height: 220px;
  background-color: gray;
  position: absolute;
  left: 25%;
  top: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 10px;
  z-index: 3;
  > h3 {
    font-size: 25px;
    font-family: "Jersey 15", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const ContainerButtons = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    padding: 8px 32px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    &:hover {
      background-color: chartreuse;
      color: white;
      box-shadow: rgba(243, 241, 241, 0.35) 0px 5px 15px;
    }
    &:active {
      background-color: #d143b9;
    }
  }
`;
