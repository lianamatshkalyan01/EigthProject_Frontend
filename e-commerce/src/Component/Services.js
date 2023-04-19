import { Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack, Button } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const[services, setService] = useState([])
    const navigate=useNavigate()
    console.log(services)
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then((res)=> res.json())
        .then(data=>setService(data))
    },[])

  return (
    <div>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginTop: "20px",
          }}
        >
          <Button>
            <Link to="/createService">New Service</Link>{" "}
          </Button>
        </Stack>
            <TableContainer 
            component={Paper}
            sx={{ width: "90%", margin: "50px auto" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Category Name</TableCell>
                            <TableCell align="center">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service)=>(
                          <TableRow
                          key={service.id}
                          >
                              <TableCell align="center">{service.name}</TableCell>
                              <TableCell align="center">{service.price}</TableCell>
                              <TableCell align="center">{service.Category?.name}</TableCell>
                              <TableCell align="center">
                                  <Link to={`/updateService/${service.id}`}>
                                      <EditIcon />
                                  </Link>
                                  <Link to={`/deleteService/${service.id}`}>
                              <DeleteOutlineIcon />
                              </Link>
                              </TableCell>
                          </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={()=>navigate('/admin')}>Back</Button>
        </Container>
    </div>
  )
}
