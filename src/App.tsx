import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Noticia from './pages/Noticia'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/noticias/:id" element={<Noticia />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
