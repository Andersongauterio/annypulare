import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManterFichaTecnica from './pages/ManterFichaTecnica';
import Home from "./pages/Home";
import ManterInsumo from './pages/ManterInsumo';
import ManterCategoriaProduto from './pages/ManterCategoriaProduto';

const Rotas = () => {
    return (
        <Router>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/manterFichaTecnica' element={<ManterFichaTecnica />} />
                <Route path='/manterInsumo' element={<ManterInsumo />} />
                <Route path='/manterCategoriaProduto' element={<ManterCategoriaProduto />} />
            </Routes>
        </Router>
    );
};

export default Rotas;