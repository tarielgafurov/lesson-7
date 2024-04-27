import React, { Fragment, useState } from 'react'
import styled from 'styled-components';
import { IoIosCloseCircle } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import Wrapper from './UI/Wrapper';
import Modal from './UI/Modal';

const Items = ({array , deleteFunc}) => {

    const [view , setView] = useState(false)
    const [modalIsVisible , setModalIsVisible] = useState(false)

    const ModalStatusHandler = () => {
      setModalIsVisible((prevState) => !prevState)
    }

    const viewChangeHandler = () => {
        setView((prevState) => !prevState)
    }

  return (
    <Wrapper>
        <ViewBtm onClick={viewChangeHandler} />
        {view ? null : array.map((item) => {
          return (
            <UserContainer key={item.id} >
              {modalIsVisible ? <Modal onConfirm={() => deleteFunc(item.id)} onClose={ModalStatusHandler} /> : null}
                <b>{item.name}</b>
                <b>{item.lastName}</b>
                <b>{item.email}</b>
                <button onClick={ModalStatusHandler} >Delete</button>
                <ContainerCloseBtn onClick={viewChangeHandler} />
            </UserContainer>
            )
        })}
    </Wrapper>
  )
}

export default Items;


const UserContainer = styled.div`
    width: 550px;
    height: 40px;
    padding: 7px 5px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: slide-down 1000ms ease-out forwards;
  left: calc(50% - 23rem);

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      background-color: greenyellow;
      color: white;
    }
  }
`

const ViewBtm = styled(GrUpdate)`
            width: 35px;
            height: 35px;
            margin-top: 20px;
`

const ContainerCloseBtn = styled(IoIosCloseCircle)`
    width: 25px;
    height: 25px;
`
