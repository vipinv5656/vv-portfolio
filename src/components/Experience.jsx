import React from 'react'
import { FaCode,FaUikit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
// import { RiPsychotherapyFill } from "react-icons/ri";
import { BsFillDatabaseFill } from "react-icons/bs";



const Experience = () => {
  return (
    <section
        name="experience"
        className="about-background"
        style={{width:'100%',minHeight:'100vh'}}>

        <div className="container-lg px-4  d-flex flex-column justify-content-start  gap-3" 
            style={{paddingTop:'80px',width:'80%',backgroundSize:'cover'}}>

                <div className='d-flex flex-column justify-content-center ' style={{marginBottom:'50px'}}>
                    <p className=" pt-5" style={{fontWeight:'700', 
                                  color:"white",fontSize:'36px',lineHeight:'40px'}}>Skills Overview</p>
                    <p className='pb-1 text-justify' style={{color:'#dcdde1',fontSize:'20px',lineHeight:'28px'}}>
                        I have three years of experience building rich web applications.
                        Previously worked in a banking software development company which offers banking modules to co-operative banks. 
                        During my tenure in company , I was assigned to assist in developing new modules for banking application and to develop internal company management application which I was involved from initial stage of gathering the requirement to deploying the application.
                        Below is a quick overview of my main technical skill sets and tools I use. 
                        </p>
                </div>
                 <div className='container row justify-content-evenly mb-3' style={{padding:'0px'}}>
                    <div className='col-12 col-md-6 col-lg-5 col-xl-4  skillsborder my-md-0  mb-lg-0 mb-5  px-0' style={{}}>
                       
                      
                         <div className='d-flex p-3 justify-content-center rounded-circle mx-auto' style={{marginTop:'-50px',width:'85px', backgroundColor:'#e58e26'}}> <FaCode size={50} color={'#d1d8e0'} /></div>

                                <div className='d-flex justify-content-center h2 my-3 ' style={{color:'#f7f1e3'}}>Front-End</div>
                      
                           
                        
                        <div className='py-4' style={{}}>
                            <ul className='justify-content-center' style={{listStyle:'none'}}>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'} />  React / Redux / Axios</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Javascript</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Tailwind / Materilize / Bootstrap</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'} />  Html / Css</li>
                        </ul></div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 col-xl-3 skillsborder my-5 my-md-0  my-lg-0 px-0' style={{}}>
                        <div className='d-flex p-3 justify-content-center  rounded-circle mx-auto' style={{marginTop:'-50px',width:'85px', backgroundColor:'#e58e26'}}> <BsFillDatabaseFill size={50} color={'#d1d8e0'} /></div>

                        <div className='d-flex justify-content-center h2 my-3' style={{color:'#f7f1e3'}}>Back-End</div>
                        
     
                         <div className=' p-4' ><ul style={{listStyle:'none'}}>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'} />  Php / laravel</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> PostgreSQL / MySql</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Json / Api</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'} />  Firebase</li>
                        </ul></div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 col-xl-4 skillsborder mt-5 mt-md-5  mt-lg-6 mt-xl-6  mt-xl-0 px-0' style={{}}>
                        <div className='d-flex p-3 justify-content-center rounded-circle mx-auto' style={{marginTop:'-50px',width:'85px', backgroundColor:'#e58e26'}}> <FaUikit size={50} color={'#d1d8e0'} /></div>
                      
                        <div className='d-flex justify-content-center h2 my-3' style={{color:'#f7f1e3'}}>Others</div>
                        
                        <div className='p-4' ><ul style={{listStyle:'none'}}>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'} />  UX / Wireframes </li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Adobe XD / Photoshop</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Github / Gitlab</li>
                            <li style={{color:'white'}}><TiTick size={20} color={'#e58e26'}  /> Amazon EC2</li>
                        </ul></div>
                    </div>
                </div>
                
        </div>

    </section>
  )
}

export default Experience
