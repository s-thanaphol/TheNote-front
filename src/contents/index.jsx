import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Index() {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );


    const [a, seta] = useState(null)

    
    async function Note() {
        return await axios.get("http://localhost:5000/note", { headers: { 'x-access-token': localStorage.getItem("token") } })  
    }

    useEffect(async () => {
        const list = (await Note())
  
        seta(list.data)

    }, [])

    console.log(a)

    function deleteNote(ID){

        axios.delete(`http://localhost:5000/note?_id=${ID}`, 
        { headers: { 'x-access-token': localStorage.getItem("token") } }).then(res => {
            window.location.reload()
        })      
      
      
    }

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login"></Navigate>
    }

    return (
        <div>
            <h1 align="center">TheNote</h1>
 
            <a href="/note/add">AddNote</a>
            <div>
                {a && a.map((list) => {
                    return (
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Topic:{list.topic}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Description:
                                </Typography>
                                <Typography variant="body2">
                                    {list.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <input onClick={()=>deleteNote(list._id)} type="submit" id="submit" className="submit" value="Delete"></input>
                            </CardActions>
                            <br></br>
                        </Card>
                    )
                })}
            </div>
        </div>

    );
}

export default Index;
