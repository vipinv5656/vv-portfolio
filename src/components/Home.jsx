import React from 'react'
// import HeroImage from "../assets/heroImage.png";
import HeroImage from "../assets/imageprofile.jpg";
import { MdOutlineKeyboardArrowRight,MdBookmarks } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/vipin varghese - Software Engineer.pdf";



const HeroContent = () => {
  return (
    <div className="pt-4 d-flex flex-column justify-content-center align-items-left">
      <h2 className="fw-bold hero-text" style={{ color: '#f5f6fa' }}>
        I'm a Full Stack <br /> Developer
      </h2>
      <p className="py-4" style={{ color: '#6b7280' }}>
        Having three years of experience in building and designing software,
        Currently I love to work on web applications using technologies like
        React Js, Javascript, and Php with Laravel.
      </p>

      <div>
        <Link
          to="portfolio"
          smooth
          duration={500}
          className="hero-btn btn btn-primary"
          style={{ marginRight: '10px' }}
        >
          Portfolio
          <span className="">
            <MdOutlineKeyboardArrowRight size={25} className="rotate-90 duration-300" />
          </span>
        </Link>
        <a
          href={resume}
          download={true}
          className="btn btn-outline-primary d-lg-none"
        >
          Download CV
          <span className="">
            <MdBookmarks size={20} className="rotate-90 duration-300 mx-1" />
          </span>
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section name="home" className="hero-background" style={{ minHeight: '100vh', width: '100%' }}>
      <div className="container-lg px-4 my-auto d-flex flex-column flex-md-row justify-content-center align-items-center gap-3" style={{ paddingTop: '80px', width: '80%', minHeight: '100vh', backgroundSize: 'cover' }}>
        <div className="image m-4 d-md-none d-flex flex-column justify-content-around align-items-center"></div>
        <HeroContent />
        <div className='d-none d-md-block photo-width m-4 d-flex flex-column justify-content-around align-items-center'>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};
export default Home
