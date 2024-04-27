import React, { useState } from 'react'
import styled from 'styled-components';

const Todo = (props) => {

    const [userName , setUserName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")

    const userNameChnageHandler = (e) => {
        setUserName(e.target.value)
    }
    const userLastNameChnageHandler = (e) => {
        setLastName(e.target.value)
    }
    const userEamilChnageHandler = (e) => {
        setEmail(e.target.value)
    }

    const clickHanlder = (e) => {
        e.preventDefault()

        const user = {
            name: userName,
            lastName,
            email,
            id: Math.random().toString()
        }
        props.save(user)
        setUserName("")
        setLastName("")
        setEmail("")
    }

    


  return (
    <Form>
      <div>
        <label htmlFor="user">user Name</label>
        <input onChange={userNameChnageHandler} value={userName} id='user' type="text" name='name' />
      </div>
      <div>
        <label htmlFor="userLastName">user Last name</label>
        <input onChange={userLastNameChnageHandler} value={lastName} id='userLastName' type="text" name='name' />
      </div>
      <div>
        <label htmlFor="userEmail">user Email</label>
        <input onChange={userEamilChnageHandler} value={email} id='userEmail' type="text" name='name' />
      </div>
      <div>
        <button onClick={clickHanlder}>Войти</button>
      </div>
    </Form>
  )
}

export default Todo;

const Form = styled.form`
    background-color: white;
    width: 400px;
    height: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 20px;
    > div{
        width: 260px;
        padding: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: gray;
        >label {
            font-size: 14px;
        }
        > input{
            width: 150px;
            height: 25px;
            font-size: 1rem;
            border: 2px solid gray;
            border-radius: 5px;
            outline: none;
            
            &:focus{
                    border: 2px solid chartreuse;
                }
        }
        button{
            padding: 10px 40px;
            color: white;
            background-color: blue;
            border-radius: 15px;
            border: none;
            font-size: 1rem;
            
            &:active{
                    background-color: greenyellow;
                }
        }
    }
`
