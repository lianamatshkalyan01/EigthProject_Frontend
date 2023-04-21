import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../Pages/Register/Register'
import Login from '../Pages/Login/Login'
import Layout from '../Layouts/Layout'
import Admin from '../Pages/adminPage/Admin'
import Services from '../Component/Services'
import Categories from '../Component/Categories'
import CreateCategories from '../Component/CreateCategories'
import EditCategories from '../Component/EditCategories'
import CreateServices from '../Component/CreateServices'
import EditServices from '../Component/EditServices'
import DeleteServices from '../Component/DeleteServices'
import DeleteCategories from '../Component/DeleteCategories'
import User from '../Pages/UserPage/User'
import ProtectedRoute from './ProtectedRoute'
import { decodeToken } from "react-jwt";
import Home from '../Pages/HomePage/Home'
import ProtectedRouteUser from './ProtectedRouteUser'

export default function AppRoutes() {
  const token =localStorage.getItem('token')
  const decodedToken = decodeToken(token);
  return (
    <div>
    <Routes>
       
       <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />}/>
        <Route element={<Layout/>}> 
        <Route path='/' element={<Home />}/>
        <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/services' element={<ProtectedRoute><Services/> </ProtectedRoute>} />
        <Route path='createService' element={<ProtectedRoute>< CreateServices/></ProtectedRoute>}/>
        <Route path='updateService/:id' element={<ProtectedRoute><EditServices/></ProtectedRoute>}/>
        <Route path='deleteService/:id' element={<ProtectedRoute><DeleteServices/></ProtectedRoute>}/>
        <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>}/>
        <Route path='createCategory' element={<ProtectedRoute>< CreateCategories/></ProtectedRoute>}/>
        <Route path='updateCategory/:id' element={<ProtectedRoute><EditCategories/></ProtectedRoute>}/>
        <Route path='deleteCategory/:id' element={<ProtectedRoute><DeleteCategories /></ProtectedRoute>}/>
        <Route path='user' element={<ProtectedRouteUser><User/></ProtectedRouteUser> } />
        </Route>
    </Routes>
    </div>
  )
}
