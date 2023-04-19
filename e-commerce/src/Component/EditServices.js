import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

export default function EditServices() {
  const navigate=useNavigate()
  const {id}=useParams()
  const[name, setName]=useState('')
  const[price, setPrice]=useState('')
  const[categoryId, setCategoryId]=useState("")

  const submitUpdateService = (id)=>async(e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      const response= await fetch(`http://localhost:5000/services/update/${id}`,{
        method:"PUT",
        body:JSON.stringify({
          name,
          price,
          categoryId
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8", 
          "Authorization":token
        },
      })
      const data = await response.json()
      console.log(data, 'data')
      
    } catch(err){
      console.log(err)
    }
    setName('')
    setPrice('')
    setCategoryId('')
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
<TextField id='name' required label="Name"  onChange={(e)=>setName(e.target.value)} />
<TextField id='price' required label="Price"  onChange={(e)=>setPrice(e.target.value)} />
<TextField id='CategoryId' required label="CategoryId" onChange={(e)=>setCategoryId(e.target.value)} />      
<Button variant="outlined" onClick={submitUpdateService(id)}> Update</Button>  
<Button onClick={()=>navigate('/services')}>Back</Button>
      </Box>
    </div>
  )
}
