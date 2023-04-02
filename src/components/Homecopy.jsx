import React from 'react'
// import HeroImage from "../assets/heroImage.png";
import HeroImage from "../assets/imageprofile.jpg";
import { MdOutlineKeyboardArrowRight,MdBookmarks } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/VipinVarghese.pdf";


const Home = () => {
  return (
    // main div ,entire home section 
    // <section name="home" className="bg-secondary  d-flex justify-content-center align-items-center" style={{height:'100vh',width:'100%'}}>
    <section name="home" className="hero-background " style={{minHeight:'100vh',width:'100%'}}>


                {/* 2 divs mains */}
               <div className="container-lg px-4 my-auto d-flex flex-column flex-md-row  justify-content-center align-items-center  gap-3" 
                        style={{paddingTop:'80px',width:'80%',minHeight:'100vh',backgroundSize:'cover'}}>


   
                    <div className=' image m-4 d-md-none d-flex flex-column justify-content-around align-items-center'></div>
                              {/* left content  */}
                    <div className="pt-4 d-flex flex-column justify-content-center align-items-left"  style={{}}>
                                    <h2 className="fw-bold hero-text " style={{color:'#f5f6fa'}}> I'm a Full Stack <br></br> Developer</h2>
                                    <p className="py-4 " style={{color:'#6b7280'}}>
                                    
                                    Having three years of experience in building and desgining software,
                                    Currently I love to work on web application using technologies like
                                    React Js, Tailwind Css, and Php .
                                    </p>

                                    <div>
                                      <Link
                                          to="portfolio"
                                          smooth
                                          duration={500}
                                          className="hero-btn btn btn-primary" style={{marginRight:'10px'}} >Portfolio
                                          
                                          <span className="">
                                          <MdOutlineKeyboardArrowRight size={25} className="rotate-90 duration-300" />
                                          </span>

                                      </Link>
                                      <a     
                                      href={resume}
                                      download={true}
                                          className=" btn btn-outline-primary d-lg-none" >Download CV
                                          
                                          <span className="">
                                          <MdBookmarks size={20} className="rotate-90 duration-300 mx-1"  />
                                          </span>

                                      </a>
                                    </div>
                                    
                            </div>
                            {/* right content - image */}

                            <div className='d-none d-md-block photo-width  m-4 d-flex flex-column justify-content-around align-items-center'
                              style={{}} >
                                    <img
                                    src={HeroImage}
                                    alt="my profile"
                                    className="rounded "
                                    style={{maxWidth:'100%'}}
                                    />
                            </div>
                                     

            </div>
    </section>
  )
}

export default Home
