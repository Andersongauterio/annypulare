import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManterFichaTecnica from './pages/ManterProduto';
import Home from "./pages/Home";
import ManterInsumo from './pages/ManterInsumo';
import ManterCategoriaProduto from './pages/ManterCategoriaProduto';
import NavBar from './components/NavBar';

const Rotas = () => {
    return (
        <Router>
            <NavBar />
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/manterProdutos' element={<ManterFichaTecnica />} />
                <Route path='/manterInsumo' element={<ManterInsumo />} />
                <Route path='/manterCategoriaProduto' element={<ManterCategoriaProduto />} />
            </Routes>
        </Router>
    );
};

export default Rotas;