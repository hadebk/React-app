import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link className="brand-logo" to="/">IBRA</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
/* { 'withRouter' is higher order components. add something extra to any component [import from react-router-dom] }
   { to make navbar as route comp and then will has props, because Navbar not invoked inside <Route /> in App.js }

export default withRouter(Navbar)
*/