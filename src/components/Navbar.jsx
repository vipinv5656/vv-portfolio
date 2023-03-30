import React ,{ useState} from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
      const [nav, setNav] = useState(false);

  
    //   ------
  

    //   ----------------
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <nav className='navbar bg-dark px-4 ' style={{height:'80px',width:'100%',position:'fixed',top: 0}}>
        
         
      <div className=' d-flex justify-content-center align-items-center'>
        <h1 className=" sig-font " style={{color:'white'}}>Vipin</h1>
      </div>
      {/* ---- */}
      <ul className='  nav justify-content-center text-capitalize'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-item d-none  d-md-block"
          >
            <Link to={link} className="nav-link " style={{color:'#dcdde1',cursor: 'pointer'}}  smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* ---- */}
      {/* ---- */}
      <div
        onClick={() => setNav(!nav)}
        className="justify-content-end " >
        {nav ? <FaTimes size={30} className="d-md-none" style={{color:'#ecf0f1'}} /> : <FaBars size={30} style={{color:'#ecf0f1'}} className="d-md-none" />}
      </div>
      {/* ---- */}
      {/* ---- */}
      
      {nav && (
        <ul className="about-overflow d-flex flex-column  justify-content-center align-items-center text-capitalize bg-black bg-gradient " style={{minHeight:'100vh',width:'100%',listStyleType:'none'}}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-3 py-4 " style={{color:'#7f8c8d',lineHeight:'2.5rem',fontSize:'2.25rem'}}
            >



              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* ---- */}
      
   
      
    </nav>
  )
}

export default Navbar
