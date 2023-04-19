import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateServices() {
  const navigate = useNavigate()
  const[name, setName]=useState('')
  const[price, setPrice]=useState('')
  const[categoryId, setCategoryId]=useState("")

  async function submitCreateService(e){
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      const response = await fetch('http://localhost:5000/services/new', {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          categoryId
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
        <TextField id='name' required label="Name" onChange={(e)=>setName(e.target.value)}></TextField>
        <TextField id='price' required label="Price" onChange={(e)=>setPrice(e.target.value)}></TextField>
        <TextField id='CategoryId' required label="CategoryId" onChange={(e)=>setCategoryId(e.target.value)}></TextField>
        <Button variant="outlined" onClick={submitCreateService}>Create</Button>
        <Button onClick={()=>navigate('/services')}>Back</Button>
      </Box>
    </div>
  )
}
