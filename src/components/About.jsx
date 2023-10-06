import React from "react";

const About = () => {
  return (
 <section
      name="about"
      className="about-background d-flex flex-row "
      style={ {width: '100%',
  minHeight: '100vh'}}
      
    >
      {/* <div className="mx-auto p-4 about-overflow about-content" style={{width: '80%' }}> */}
      <div className="mx-auto p-4 about-overflow about-content" style={{width: '80%',height: '80%',marginTop:'5%'  }}>
        <div className="d-flex align-items-center" style={{ paddingBottom: '32px', paddingTop: '32px' }}>
          <p className="" style={{ fontWeight: '700', color: 'white', fontSize: '36px', lineHeight: '40px' }}>
            About
          </p>
        </div>
        <div>

          <p classN ame="mt-5 text-justify" style={{ color: "#dcdde1", fontSize: '20px', lineHeight: '28px' }}>
            A diligent Full-Stack Developer with three years of experience in building and maintaining responsive websites. I specialize in web-based technologies like React JS, JavaScript, and PHP, along with modern libraries like Axios, Redux, and Immer. I'm passionate about usability and capable of thinking from a business viewpoint to understand business processes and needs. Additionally, I have extensive design experience with prototyping technologies like Adobe XD and Adobe Photoshop.
          </p>   
          <br />

          <p className="text-justify" style={{ color: "#dcdde1", fontSize: '20px', lineHeight: '28px' }}>
            I hold both a master's and a bachelor's degree in computer science, and I continuously update my expertise by taking online courses from Udemy taught by industry prominent developers. This allows me to stay current with industry requirements. I am always eager to learn new technologies in order to improve my skill-set in response to project requirements.
          </p>

        </div>
      </div>
    </section>

);
};

export default About;
