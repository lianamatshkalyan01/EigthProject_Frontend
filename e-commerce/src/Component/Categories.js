import { Container, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Stack } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate=useNavigate()
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    })

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
            <Link to="/createCategory">New Category</Link>{" "}
          </Button>
        </Stack>
            <TableContainer
            component={Paper}
            sx={{ width: "90%", margin: "50px auto" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category)=>(
                            <TableRow
                            key={category.id}
                            >
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                <Link to={`/updateCategory/${category.id}`}>
                                        <EditIcon />
                                    </Link>
                                    <Link to={`/deleteCategory/${category.id}`}>
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

export default Categories