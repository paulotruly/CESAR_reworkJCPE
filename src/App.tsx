import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Noticia from './pages/Noticia'
import Header from './components/Header';
import Rodape from './components/Rodape';
import Categoria from './pages/Categoria';

function App() {

  return (
    <>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/noticias/:id" element={<Noticia />} />
            <Route path="/categoria" element={<Categoria />} />
          </Routes>
        <Rodape></Rodape>
    </>
  )
}

export default App
