import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Resume
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/prev-work' className='nav-links' onClick={closeMobileMenu}>
                        Previous Work
                    </Link>
                </li>
                {/* https://www.youtube.com/watch?v=I2UBjN5ER4s */}
                <li className='nav-item'>
                    <Link to='/refs' className='nav-links' onClick={closeMobileMenu}>
                        Refrences 
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar