import { Navigate } from 'react-router-dom';
import axios from 'axios'


function Add (){
    

    function submit(e){
        e.preventDefault()
        //console.log(e.target.username.value)
        axios.post("http://localhost:5000/note/add",{
            topic:e.target.topic.value,
            description:e.target.description.value,
            token:localStorage.getItem("token")
        },{headers:{"Content-Type":"application/json"}}).then(res => {
            window.location.replace("/note")
        })      
        
    }
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login"></Navigate>
    }
    return(
        <div>
        <h1 align="center">Sign In TheNote</h1>
        <a href="/note">back to your note</a>
        <form onSubmit={submit}>
        <div>
            <label for="topic">Topic:</label><h1></h1>
            <input type="text" name="topic" />
            <h1></h1>
        </div>
        <div>
            <label for="">Description</label><h1></h1>
            <textarea name="description" rows="10" cols="80"></textarea>
            <h1></h1>
        </div>
        <input type="submit" id="submit" className="submit" value="Add"></input>
        </form>
        </div>
    );
}

export default Add ;
