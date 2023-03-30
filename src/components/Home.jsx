import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    // main div ,entire home section 
    // <section name="home" className="bg-secondary  d-flex justify-content-center align-items-center" style={{height:'100vh',width:'100%'}}>
    <section name="home" className="hero-background " style={{minHeight:'100vh',width:'100%'}}>


                {/* 2 divs mains */}
                <div className="p-4  d-flex flex-column flex-md-row    " style={{marginTop:'80px', marginBottom:'0px',marginLeft:'10%',marginRight:'10%',height:'100%' ,backgroundSize:'cover' }}>       
                            {/* left content  */}
                            <div className=" p-4 d-flex flex-column justify-content-center align-items-left"  style={{}}>
                                    <h2 className="fw-bold hero-text " style={{color:'#f5f6fa'}}>
                                    I'm a Full Stack <br></br> Developer
                                    </h2>
                                    <p className="py-4 " style={{ maxWidth:'28rem',color:'#6b7280'}}>
                                    I have 3 years of experience building and desgining software.
                                    Currently, I love to work on web application using technologies like
                                    React Js, Tailwind Css, and Php .
                                    </p>

                                    <div>
                                    <Link
                                        to="portfolio"
                                        smooth
                                        duration={500}
                                        className="hero-btn btn btn-primary"
                                        
                                    >
                                        Portfolio
                                        <span className="">
                                        <MdOutlineKeyboardArrowRight size={25} className="rotate-90 duration-300" />
                                        </span>
                                    </Link>
                                    </div>
                            </div>
                            {/* right content - image */}

                            <div
                            className='m-4 d-flex flex-column justify-content-center align-items-center'>
                                    <img
                                    src={HeroImage}
                                    alt="my profile"
                                    className="rounded "
                                    style={{maxWidth:'80%'}}
                                    />
                            </div>

                </div>
    </section>
  )
}

export default Home
