import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Noticia from './pages/Noticia'
import Header from './components/Header';
import Rodape from './components/Rodape';

function App() {

  return (
    <>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/noticias/:id" element={<Noticia />} />
          </Routes>
        <Rodape></Rodape>
    </>
  )
}

export default App
