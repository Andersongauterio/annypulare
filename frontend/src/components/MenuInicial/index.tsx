import { Link } from 'react-router-dom';
import './styles.css';

const MenuInicial = () => {
    return (
        <div className="annypulare-menu-inicial-container">
            <Link to="/manterProdutos">
                <button className="btn btn-primary annypulare-btn">
                    <h6>Manter Ficha Técnica</h6>
                </button>
            </Link>
            <Link to="/manterCategoriaProduto">
                <button className="btn btn-primary annypulare-btn">
                    <h6>Manter Categoria de Produto</h6>
                </button>
            </Link>
            <Link to="/manterInsumo">
                <button className="btn btn-primary annypulare-btn">
                    <h6>Manter Insumo</h6>
                </button>
            </Link>
        </div>
    );
};

export default MenuInicial;