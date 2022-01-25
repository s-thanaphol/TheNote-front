import axios from 'axios'

function Register (){
    
    function submit(e){
        e.preventDefault()
        //console.log(e.target.username.value)
        axios.post("http://localhost:5000/register",{
            firstname:e.target.firstname.value,
            lastname:e.target.lastname.value,
            username:e.target.username.value,
            password:e.target.password.value

        },{headers:{"Content-Type":"application/json"}}).then(res => {
          window.location.replace("/login");
        })
     
      
      
      }

    return(
        <div >
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <form onSubmit={submit}>
        <p>
          <label for="firstname">Firstname:</label>
          <input type="text" name="firstname" id="firstname"/>
        </p>
        <p>
          <label for="lastname">Lastname:</label>
          <input type="text" name="lastname" id="lastname"/>
        </p>
        <p>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username"/>
        </p>
        <p>
          <label for="password">Password:</label>
          <input type="text" name="password" id="password" />
        </p>
        <input type="submit" id="submit" className="submit" value="Register"></input>
        </form>
        </div>
    );
}

export default Register;
