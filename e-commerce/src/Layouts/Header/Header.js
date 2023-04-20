import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background:'blue', height:'130px' }}>
        <ImageList>
  <img
    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBBhokzhNvY2MsE5NeM-39nl12kp4qzCzWw&usqp=CAU`}
    style={{ width: '100%', height: '130px' }}
    alt="Example"
  />
</ImageList>
        <Button variant="contained" sx={{ position: 'absolute', right: '2%' }} onClick={()=> navigate('/login')}>
          Login
        </Button>
      </Box>
    );
  }