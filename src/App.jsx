import React from 'react'
import Sidebar from './snippets/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AviableMended from './pages/AviableMended'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AviableMended />} />
      </Routes>
    </BrowserRouter>
  )
}
