import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const RoutesLayout = () => {
  return (
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesLayout