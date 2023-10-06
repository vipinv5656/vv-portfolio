import React from 'react'
import { FaCode,FaUikit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
// import { RiPsychotherapyFill } from "react-icons/ri";
import { BsFillDatabaseFill } from "react-icons/bs";



const SkillItem = ({ icon, title, list }) => (
  <div className="col-12 col-md-5 col-lg-4 col-xl-3 skillsborder my-5 my-md-0 my-lg-0 px-0">
    <div className="d-flex p-3 justify-content-center rounded-circle mx-auto" style={{ marginTop: '-50px', width: '85px', backgroundColor: '#e58e26' }}>
      {icon}
    </div>
    <div className="d-flex justify-content-center h2 my-3" style={{ color: '#f7f1e3' }}>
      {title}
    </div>
    <div className="p-4">
      <ul style={{ listStyle: 'none' }}>
        {list.map((item, index) => (
          <li key={index} style={{ color: 'white' }}>
            <TiTick size={20} color={'#e58e26'} /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const skillSets = [
    {
      icon: <FaCode size={50} color={'#d1d8e0'} />,
      title: 'Front-End',
      list: ['React / Redux / Axios', 'Javascript', 'Tailwind / Materilize / Bootstrap', 'Html / Css']
    },
    {
      icon: <BsFillDatabaseFill size={50} color={'#d1d8e0'} />,
      title: 'Back-End',
      list: ['Php / laravel', 'PostgreSQL / MySql', 'Json / Api', 'Firebase']
    },
    {
      icon: <FaUikit size={50} color={'#d1d8e0'} />,
      title: 'Others',
      list: ['UX / Wireframes', 'Adobe XD / Photoshop', 'Github / Gitlab', 'Amazon EC2']
    }
  ];

  return (
    <section name="experience" className="about-background" style={{ width: '100%', minHeight: '100vh' }}>
      <div className="container-lg px-4 d-flex flex-column justify-content-start gap-3" style={{ paddingTop: '80px', width: '80%', backgroundSize: 'cover' }}>
        <div className="d-flex flex-column justify-content-center" style={{ marginBottom: '50px' }}>
          <p className="pt-5" style={{ fontWeight: '700', color: "white", fontSize: '36px', lineHeight: '40px' }}>Skills Overview</p>
          <p className="pb-1 text-justify" style={{ color: '#dcdde1', fontSize: '20px', lineHeight: '28px' }}>
            I have three years of experience building rich web applications. Previously worked in a banking software development company which offers banking modules to co-operative banks. During my tenure in the company, I was assigned to assist in developing new modules for banking application and to develop internal company management application which I was involved from the initial stage of gathering the requirement to deploying the application. Below is a quick overview of my main technical skill sets and tools I use.
          </p>
        </div>
        <div className="container row justify-content-evenly mb-3" style={{ padding: '0px' }}>
          {skillSets.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};



export default Experience
