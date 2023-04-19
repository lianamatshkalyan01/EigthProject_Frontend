import { Box, TextField, Button } from '@mui/material'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateCategories() {
  const [name, setName]=useState('')
  const navigate=useNavigate()
  async function submitCreateCategory(e){
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      const response = await fetch('http://localhost:5000/category/new', {
        method: "POST",
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
    } catch(err){
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
        <TextField id='name' required label="Name" onChange={(e)=>setName(e.target.value)}>Name</TextField>
        <Button variant="outlined" onClick={submitCreateCategory} >Create</Button>
        <Button onClick={()=>navigate('/categories')}>Back</Button>
      </Box>
    </div>
  )
}