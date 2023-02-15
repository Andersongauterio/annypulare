import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark- bg-primary annypulare-navbar-container">
            <div className="container-fluid">
				<Link to="/" className="nav-logo-text">
					<h4>Annypulare</h4>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#annypulare-navbar"
					aria-controls="annypulare-navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="annypulare-navbar">
					<ul className="navbar-nav offset-md-2 main-menu">
						<li>
							<NavLink to="/">
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink to="/manterProdutos">
								Produtos
							</NavLink>
						</li>
						<li>
							<NavLink to="/manterInsumo">
								Insumos
							</NavLink>
						</li>
                        <li>
							<NavLink to="/manterCategoriaProduto">
								Categorias
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
        </nav>    
    );
};

export default NavBar;