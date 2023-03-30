import React from 'react'
// import HeroImage from "../assets/heroImage.png";
import HeroImage from "../assets/imageprofile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    // main div ,entire home section 
    <section name="home" className="hero-background d-flex border border-primary" style={{minHeight:'100vh',width:'100%'}}>


                {/* 2 divs mains */}
        <div className=" border border-danger container row mx-auto p-4 justify-content-around align-items-center" 
                        style={{paddingTop:'100px',width:'100%',minHeight:'100%',backgroundSize:'cover'}}>


   
                    <div className='image m-4 d-md-none d-flex flex-column justify-content-around align-items-center'></div>
                              {/* left content  */}
                    <div className="col-12 col-md-7 border border-warning"  style={{}}>
                                    <h2 className="fw-bold hero-text" style={{color:'#f5f6fa'}}> I'm a Full Stack <br></br> Developer</h2>
                                    <p className="py-4 " style={{color:'#6b7280'}}>
                                    
                                    I have 3 years of experience building and desgining software.
                                    Currently, I love to work on web application using technologies like
                                    React JS, Tailwind Css and  Php.
                                    </p>

                                    <div>
                                      <Link
                                          to="portfolio"
                                          smooth
                                          duration={500}
                                          className="hero-btn btn btn-primary" >Portfolio
                                          
                                          <span className="">
                                          <MdOutlineKeyboardArrowRight size={25} className="rotate-90 duration-300" />
                                          </span>

                                      </Link>
                                    </div>
                      </div>
                            {/* right content - image */}

                            <div className=' col-3 col-md-4 d-none d-md-block  border border-information'
                              style={{maxWidth:'300px'}} >
                                    <img
                                    src={HeroImage}
                                    alt="my profile"
                                    className="rounded "
                                    style={{ overflow: 'hidden',width:'100%',height:'100%',flexShrink:'0'}}
                                    />
                            </div>
                                     

            </div>
    </section>
  )
}

export default Home
