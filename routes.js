import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/erro';

import Header from './componentes/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/filme/id:' element={<Filme />} />

        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>


  )
}
export default RoutesApp;