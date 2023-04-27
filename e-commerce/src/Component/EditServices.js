import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'

export default function EditServices() {
  const navigate=useNavigate()
  const {id}=useParams()
  const[categories, setCategories] = useState([])
  const[services, setServices]=useState({})
  const[err, setErr]=useState('')

  const submitUpdateService = (id)=>async(e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token')
    if(services.name.trim() === "" || services.price.trim() === "" || services.category_id === ""){
      setErr("Fill all fields")
      return
    }
    try{
      const response= await fetch(`http://localhost:5000/services/update/${id}`,{
        method:"PUT",
        body:JSON.stringify({
          name: services.name,
          price: services.price,
          category_id :services.category_id
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8", 
          "Authorization":token
        },
      })
     if(!response.ok){
      setErr("Not Found")
     }
      
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetch("http://localhost:5000/category")
    .then(res =>res.json())
    .then(data=>setCategories(data))
  },[])

  useEffect(()=>{
    fetch(`http://localhost:5000/services/${id}`)
    .then(res =>res.json())
    .then (data=>{
      console.log(data)
      setServices(data[0])
    })
  },[id])

  return (
    <div>
      {
        services.name !== undefined ?
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
<TextField id='name' label="name" value={services?.name} onChange={(e)=>setServices((prevState)=>({
        ...prevState,
        name: e.target.value
}))} />
<TextField id='price' label="price" value={services?.price} onChange={(e)=>setServices((prevState)=>({
  ...prevState,
  price: e.target.value
}))} />
<FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        value={services?.category_id}
        id="demo-simple-select"
        label="Category"
        onChange={(e)=>setServices((prevState)=>({
          ...prevState,
          category_id: e.target.value
  }))} >
          {categories.map((category)=>(
            <MenuItem value={category.id} key={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>     
<Button variant="outlined" onClick={submitUpdateService(id)}> Update</Button>  
<Typography component="p" color='red'>
  {err ? err : null}
</Typography>
<Button onClick={()=>navigate('/services')}>Back</Button>
      </Box> : <></>
      }
    </div>
  )
}
