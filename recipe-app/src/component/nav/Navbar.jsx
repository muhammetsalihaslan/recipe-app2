import Nav from './Navbar.style';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
        <div>
            <i> {'<MSA/>'} </i>
            <span>Recipe</span>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="register">Register</Link>
            <Link to="login">Logout</Link>
        </div>
        </Nav>
    )
};


export default Navbar;