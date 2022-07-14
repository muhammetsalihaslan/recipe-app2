import NavStyle from './Navbar.style';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <div>
            <i> {'<MSA/>'} </i>
            <span>Recipe</span>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="register">Register</Link>
        </div>
        </nav>
    )
};


export default Navbar;