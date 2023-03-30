import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="about-background  d-flex flex-row "
      style={{width:'100%',minHeight:'100vh'}}
    >
      <div className="mx-auto   p-4  about-overflow " style={{width:'80%',height:'80%',marginTop:'5%' }}>
        <div className="d-flex align-items-center " style={{paddingBottom:'32px',paddingTop:'32px'}}>
          <p className="" style={{fontWeight:'700',color:"white",fontSize:'36px',lineHeight:'40px'}}>
            About
          </p>
        </div>
        <div className="">

        <p className="mt-5" style={{color:"#dcdde1",fontSize:'20px',lineHeight:'28px'}}>
         I am a diligent Full-Stack Developer with three year experience in building and maintaining responsive websites  and i would love to work on web based technologies like  React JS , Javascript and Php  with modern libraries like Axios , Redux and Immet . 
         Passionate about usability and capable of thinking from a business viewpoint to understand business processes and needs. 
         In addition, I have extensive design experience with prototyping technologies like  Adobe XD and Adobe Photoshop.
        </p>

        <br />

        <p className="" style={{color:"#dcdde1",fontSize:'20px',lineHeight:'28px'}}>
         I have a master's and a bachelor's degree in computer science. Together with the degrees, I have updated my expertise by taking online courses from udemy taught by industry prominent developers, which allows me to stay current with industry requirements. I am willing to learn new technologies in order to improve my skill set .
         
        </p>

      </div>
      </div>
    </section>
  );
};

export default About;
