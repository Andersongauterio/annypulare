import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManterFichaTecnica from './pages/ManterProduto';
import Home from "./pages/Home";
import ManterInsumo from './pages/ManterInsumo';
import ManterCategoriaProduto from './pages/ManterCategoriaProduto';
import NavBar from './components/NavBar';
import MenuInicial from './components/MenuInicial';
import Rotulos from './pages/Rotulos';

const Rotas = () => {
  return (
    <Router>
      <NavBar />
      <div className="annypulare-main-content">
        <div className="annypuulare-side-menu">
          <MenuInicial />
        </div>
        <div className="annypulare-main-routes">
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/manterProdutos' element={<ManterFichaTecnica />} />
          <Route path='/manterInsumo' element={<ManterInsumo />} />
          <Route path='/manterCategoriaProduto' element={<ManterCategoriaProduto />} />
          <Route path='/rotulos' element={<Rotulos />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Rotas;