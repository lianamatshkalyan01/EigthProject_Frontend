import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateServices() {
  const navigate = useNavigate()
  const[name, setName]=useState('')
  const[price, setPrice]=useState('')
  const[category_id, setCategoryId]=useState("")
  const[categories, setCategories] = useState([])

  async function submitCreateService(e){
    e.preventDefault()
    const token = localStorage.getItem('token')
    try{
      const response = await fetch('http://localhost:5000/services/new', {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          category_id
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

  useEffect(()=>{
    fetch("http://localhost:5000/category")
    .then(res =>res.json())
    .then(data=>setCategories(data))
  },[])
  
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select  
        labelId="demo-simple-select-label"
        value={category_id}
        id="demo-simple-select"
        label="Category"
        onChange={(e)=>setCategoryId(e.target.value)}>
          {categories.map((category)=>(
            <MenuItem value={category.id} key={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <Button variant="outlined" onClick={submitCreateService}>Create</Button>
        <Button onClick={()=>navigate('/services')}>Back</Button>
      </Box>
    </div>
  )
}
