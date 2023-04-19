import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background:'blue', height:'100px' }}>
        <ImageList sx={{ width: 500, height: 200 }}>
          <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zomy2bYY657SvKln8ZmdaHzmJxC5tELsScXKNSNkrhna3iuBB7VrLH-KCnFclvyoArs&usqp=CAU`} srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zomy2bYY657SvKln8ZmdaHzmJxC5tELsScXKNSNkrhna3iuBB7VrLH-KCnFclvyoArs&usqp=CAU`} />
        </ImageList>
        <Button variant="contained" sx={{ position: 'absolute', right: '2%' }} onClick={()=> navigate('/login')}>
          Login
        </Button>
      </Box>
    );
  }