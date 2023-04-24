import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import { useState, useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function User() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Filter services by category and return an array of unique categories
  const uniqueCategories = [...new Set(services.map(service => service.Category?.name))];

  return (
    <div>
      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: '20px',
          }}
        ></Stack>
        {uniqueCategories.map(category => {
          const filteredServices = services.filter(service => service.Category?.name === category);
          return (
            <Accordion key={category}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper} sx={{ width: '90%', margin: '50px auto' }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredServices.map(service => (
                        <TableRow key={service.id}>
                          <TableCell align="center">{service.name}</TableCell>
                          <TableCell align="center">{service.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          );
        })}
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            marginTop: '20px',
          }}
        >
          <Button variant="contained" onClick={handleLogOut}>
            LogOut
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default User;
