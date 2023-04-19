import { Box, Button, TextField } from '@mui/material'
import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCategories() {
  const[name, setName] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const submitUpdateCategories = (id) => async(e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      const response = await fetch(`http://localhost:5000/category/update/${id}`, {
        method:"PUT",
        body: JSON.stringify({
          name
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8", 
          "Authorization":token
        }
      })
      const data = await response.json()
      console.log(data, 'data')
    }catch(err){
      console.log(err)
    }
    setName('')
  }
  
  return (
    <div>
      <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '41ch' },
        marginTop:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
      }}
      noValidate
      autoComplete="off">
        <TextField id='name' required label="Name" onChange={(e)=>setName(e.target.value)}/>
        <Button variant="outlined" onClick={submitUpdateCategories(id)}>Update</Button>
        <Button onClick={()=>navigate('/categories')}>Back</Button>
      </Box>
    </div>
  )
}
