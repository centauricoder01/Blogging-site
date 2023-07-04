import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Loign from './Pages/Loign'
import Dashboard from './Pages/Dashboard'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Loign />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    )
}

export default App