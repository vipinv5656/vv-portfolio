
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className='navbar bg-dark px-4' style={{ height: '80px', width: '100%', position: 'fixed', top: 0 }}>
      <div className='d-flex justify-content-center align-items-center'>
        <h1 className="sig-font" style={{ color: 'white' }}>Vipin</h1>
      </div>
      <ul className='nav text-capitalize d-none d-md-flex text-center'>
        {links.map(({ id, link }) => (
          <li key={id} className="nav-item">
            <Link to={link} className="nav-link" style={{ color: '#dcdde1' }} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="d-md-none">
        {navOpen ? (
          <FaTimes size={30} style={{ color: '#ecf0f1' }} onClick={toggleNav} />
        ) : (
          <FaBars size={30} style={{ color: '#ecf0f1' }} onClick={toggleNav} />
        )}
      </div>
      {navOpen && (
        <ul className="d-flex flex-column justify-content-center align-items-center text-capitalize bg-black bg-gradient"
          style={{ minHeight: '100vh', width: '100%', listStyleType: 'none' }}>
          {links.map(({ id, link }) => (
            <li key={id} className="px-3 py-4" style={{ color: '#7f8c8d', lineHeight: '2.5rem', fontSize: '2.25rem' }}>
              <Link to={link} onClick={toggleNav} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar;
