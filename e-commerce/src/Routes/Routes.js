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

export default function AppRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route element={<Layout/>}> 
        <Route path='/admin' element={<Admin />} />
        <Route path='/services' element={<Services/>} />
        <Route path='createService' element={< CreateServices/>}/>
        <Route path='updateService/:id' element={<EditServices/>}/>
        <Route path='deleteService/:id' element={<DeleteServices/>}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='createCategory' element={< CreateCategories/>}/>
        <Route path='updateCategory/:id' element={<EditCategories/>}/>
        <Route path='deleteCategory/:id' element={<DeleteCategories />}/>
        <Route path='user' element={< User/>} />
        </Route>
    </Routes>
    </div>
  )
}
