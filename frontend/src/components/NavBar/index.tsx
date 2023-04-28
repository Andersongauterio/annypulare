import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark annypulare-navbar-container">
            <div className="container-fluid">
				<Link to="/" className="annypulare-nav-logo-icon">
					<img src={require('../../assets/images/logo.png')} alt="Logo" className="annypulare-nav-logo" />
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
			</div>
        </nav>    
    );
};

export default NavBar;