import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import resume from "../assets/vipin varghese - Software Engineer.pdf";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vipin-varghese-86353a166/",
      style: " rounded-tr",
    },
    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:vipin.kulangara@hotmail.com",
    },
    {
      id: 3,
      child: ( 
        <> 
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
         href: resume,
      style: " rounded-br",
      download: true,
    },
  ];

  return (
    <div className="d-none  d-lg-block "
          style={{top:'40%',left:'0px',position:"fixed", flexDirection: 'column'}}>
      <ul style={{listStyleType:'none'}}>
        {links.map(({ id, child, href, style, download }) => (          
          <li
            key={id}
        
            className={"hover-social px-2 d-flex justify-content-center align-items-center " + style }
              style={{ width:'10rem',height:'3.5rem',backgroundColor:'#6b7280',cursor:"pointer"}}
            
          
          >
            <a
              href={href}
              className="d-flex "
              style={{ justifyContent:'space-between',alignItems:'center',width:'100%',color:'#ffffff',textDecoration:'none'}}
              // className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
