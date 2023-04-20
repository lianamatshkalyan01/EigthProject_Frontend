import React from 'react'
import { MenuItem, MenuList, Box, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Admin() {
  const navigate = useNavigate()
  const handleLogOut = () =>{
    localStorage.removeItem('token')
      navigate('/')
  }
  return (
    <div>
        <Box sx={{display: "flex",  background: "#D9E0E7" }}>
        <Box 
        sx={{
            width: 320,
            height: "88vh",
            maxWidth: "100%",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: "none",
            background: "white" 
          }}
          >
            <MenuList
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
            <Link to="/categories">
                <MenuItem sx={{ marginTop: "35px" }}> Categories</MenuItem>
            </Link>
            <Link to="/services">
                <MenuItem >Services</MenuItem>
            </Link>
            <Button variant="contained" onClick={handleLogOut} >LogOut</Button>
            </MenuList>
          </Box>
          <Box sx={{marginLeft: '10%', marginTop: "50px" }}>
          <ImageList sx={{ width: 1000, height: 600}} variant="woven" cols={3} gap={8} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> 
          
          </Box>
          </Box>
    </div>
  )
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjoqwooTeoa2lJXq638H2PSgnKIvETmy3YQ&usqp=CAU',
    title: 'resuscitation',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsxjUJ5X3h4ziXdVp3r5OiukY8gVJoZYIZQ&usqp=CAU',
    title: 'operating room',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7NSa0lUdJNyDVfPTKld1_Kp92lrsI5fCTQ&usqp=CAU',
    title: 'radiology',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9ULDI3TSLG5qPAQvy8-7ZGc2IPXdUoA4Sw&usqp=CAU',
    title: 'Ophtalmology',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXJJP1vsWreLUfm9eBQu7x61UrQs10AaXJA&usqp=CAU',
    title: 'reception',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekk-tUeBVfxyLmDHgBHa0m7ND_Vh4XZPoBQ&usqp=CAU',
    title: 'laboratory',
  },
  
];
