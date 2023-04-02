import React from 'react'

const Contact = () => {
  return (
      <section
        name="contact"
        className="hero-background "
        style={{minWidth:'100%',minHeight:'100vh'}}>

            <div className="container-lg px-4   d-flex flex-column justify-content-start  gap-3" 
                style={{paddingTop:'80px',width:'80%',backgroundSize:'cover'}}>
                
          
                <div className='d-flex flex-column justify-content-center ' style={{marginBottom:'1px'}}>
                    <p className=" py-5" style={{fontWeight:'700', 
                                  color:"white",fontSize:'36px',lineHeight:'40px'}}>Contact</p>
                    <p className='pb-1 ' style={{color:'white',fontSize:'20px',lineHeight:'28px'}}>Submit the form below to get in touch with me</p>
                </div>
            <div className='d-flex mb-3 ' style={{padding:'0px'}}>
            <form
                action="https://getform.io/f/76189781-39d5-42c0-8193-8ec3b85d6f28"
                method="POST"
                className="container mx-auto "
                style={{}}
            >
            <div className='row justify-content-center '>
                       <input
                       required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded border border-infromation mb-4 p-2 col-10 col-md-6 col-lg-5 "
              style={{}}
            />
                </div>
         <div className='row justify-content-center '>
<input
required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded border border-infromation mb-4 p-2 col-10 col-md-6 col-lg-5"
            />
         </div>
            <div className='row justify-content-center '>
            <textarea
            required
              name="message"
              placeholder="Enter your message"
              rows="10"
              className=" rounded border border-infromation mb-4 p-2 col-10 col-md-6 col-lg-5">

              </textarea>
            </div>
            <div className='row justify-content-center '>
                <button className=" rounded btn btn-primary  mb-4 col-6 col-md-2 col-lg-2" style={{}}>
              Let's talk
            </button>
            </div>
           

            
          </form>

                </div>
           

            </div>
             

<div className='bg-dark  d-flex justify-content-center m-0 ' style={{minWidth:'100%'}}>
  <div className='container row ' style={{minWidth:'80%'}}>
                <div className='col-12 py-2   d-flex justify-content-center align-items-center' style={{color:'white'}}>
                  <p> Ph: 0892701025 &nbsp; </p>
                  
                  <p>|&nbsp;  Email: vipin.kulangara@hotmail.com</p>
                  </div>
                <div className='col-12 py-2 d-lg-none  d-flex justify-content-center align-items-center' style={{color:'white'}}>
                  <a href="https://github.com/vipinv5656"  target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>Github &nbsp; |</a>
                  <a href="https://www.linkedin.com/in/vipin-varghese-86353a166/"  target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white'}}>&nbsp; LinkedIn</a>
                </div>
  </div>
                
            </div>
    </section>
  )
}

export default Contact
