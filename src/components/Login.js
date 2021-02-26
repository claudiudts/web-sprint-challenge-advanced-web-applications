import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  
  const credentialValues = {
    username: '',
    password: ''
  };

  const [credentials, setCredentials] =  useState(credentialValues);

  const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  const login = (e) => {
    e.preventDefault();
    if(!e.target.username || !e.target.password) {
      alert("Username or Password not valid.");
    } else {
      axios
        .post('http://localhost:5000/api/login', credentials)
        .then((response) => {
          localStorage.setItem('token', response.data.payload);
          window.location.href = '/protected';
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  useEffect(()=>{
    
  });

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <div>
    <form onSubmit={login}>
      <label htmlFor="username">
      <input
        type="text"
        id='username'
        placeholder='enter your username'
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      </label>
      <label htmlFor='password'>
      <input
        type="password"
        id='password'
        placeholder='enter your password'
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      </label>
      <button>Log in</button>
     
    </form>
  </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displayed display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.