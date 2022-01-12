import React, {Component} from 'react'
import axios from 'axios'

function Login (){

    function submit(e){
      e.preventDefault()
      //console.log(e.target.username.value)
      axios.post("http://localhost:5000/login",{
        username:e.target.username.value,
        password:e.target.password.value
      },{headers:{"Content-Type":"application/json"}}).then(res => {
        localStorage.setItem("token", res.data.token)
        window.location.replace("/note")
      })      
    
    
    }

    return(
        <div>
        <h1 align="center">Sign In TheNote</h1>
        <form onSubmit={submit}>
        <p>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" />
        </p>
        <p>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" />
        </p>
        <input type="submit" id="submit" className="submit" value="Login"></input>
        </form>
        </div>
    );
}

export default Login;