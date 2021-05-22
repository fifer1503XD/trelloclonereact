import React, {useRef}from 'react';
import { Form,Button } from 'react-bootstrap'
import {  useHistory } from "react-router-dom";
import { getUserId, loginUser, setActiveSession } from '../actions/authActions';
import {useDispatch } from "react-redux";
const Login = () => {
  
  const dispatch = useDispatch();
  const refEmail = useRef('');
  const refPassword = useRef('');
  const history = useHistory();
  const myLogin = async(event) =>{
    event.preventDefault();
    dispatch(loginUser(refEmail.current.value,refPassword.current.value))
    .then((data)=>{
      dispatch(setActiveSession(data))
      if (data === true) {
        history.push("/trello");
      }
    }
    )
      try{
        dispatch(getUserId(refEmail.current.value));
    }catch(error){
      
      alert(error.message);
    }}

  
    return (
      <div className="containerFormulario">
        
        <Form onSubmit={myLogin} className="formulario">
          <p className="tittle 2rem">TRELLO CLONE</p>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={refEmail}type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={refPassword} type="password" placeholder="Password" />
        </Form.Group >
        <Form.Group className="center">
        <Button className="center" variant="primary" type="submit">
          Ingresar
        </Button>
        </Form.Group>
        
      </Form>
      </div>
       
      );
}
 
export default Login;
