import React from "react";
import coco from "../assets/portfolio/coco.jpg";
import github from "../assets/portfolio/githhub.jpg";




const PortfolioItem = ({ id, src, url, code }) => (
  <div key={id} className="rounded col-lg-3 col-sm-5 shadow-whitebox" style={{ height: 'fit-content', padding: '0px' }}>
    <img src={src} alt="" className="rounded imggrid zoom" />
    <div className="d-flex justify-content-center align-items-center">
      <a href={url} target='_blank' rel="noreferrer" className="flex-fill py-3 zoom" style={{ border: 'none', backgroundColor: 'transparent', color: 'white', textDecoration: 'none' }}>
        View
      </a>
     
    </div>
  </div>
);

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: coco,
      url: 'https://vv-onlinestore-react.netlify.app',
      code: 'https://github.com/vipinv5656/vv-onlinestore-react'
    },
    {
      id: 2,
      src: github,
      url: 'https://vv-react-githubsearch.netlify.app',
      code: 'https://github.com/vipinv5656/vv-github-user'
    },
  ];

  return (
    <section name="portfolio" className="hero-background" style={{ width: '100%' }}>
      <div className="container-lg px-4 d-flex flex-column justify-content-start" style={{ paddingTop: '150px', width: '80%', minHeight: '100vh', backgroundSize: 'cover' }}>
        <div className="d-flex flex-column mx-auto pb-8" style={{ width: '100%' }}>
          <p className="" style={{ fontWeight: '700', borderBottomWidth: '4px', borderBottomColor: '#718093', color: 'white', fontSize: '36px', lineHeight: '40px' }}>
            Portfolio
          </p>
          <p className="py-6" style={{ color: '#dfe6e9' }}> Check out some of my works</p>
        </div>
        <div className="row text-center px-12 justify-content-center" style={{ gap: '1.5rem', paddingBottom: '20px' }}>
          {portfolios.map(item => <PortfolioItem key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
