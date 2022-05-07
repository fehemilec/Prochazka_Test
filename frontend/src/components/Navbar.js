import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const cart = useSelector(state => state.cart);
  const { cartItems,cartItems_hor } = cart;

  const getCartCount = () => {
    return (cartItems.reduce((qty, item) => qty + Number(item.qty), 0) + cartItems_hor.reduce((qty,item) => qty +Number(item.qty),0));
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Žaluzie Procházka
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-home' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-services'
                onClick={closeMobileMenu}
              >
                Products                
              </Link>
              <div class="dropdown-content"> 
                <a href="/#">Horizontální žaluzie</a>
                <a href="/#">Náhradní díly</a>
              </div>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-contact'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-cart'
                onClick={closeMobileMenu}
              ><i className='fas fa-shopping-cart' />  <span className='cartlogo'>{getCartCount()}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;