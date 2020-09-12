import React from 'react';

import Layout from 'components/Layout';
// import BrandIcon from 'components/BrandIcon';
// import HybridImage from 'components/HybridImage';

export const config = { amp: 'hybrid' };

const Home = () => (
  <>
    <Layout title="Sean Watters — Software Engineer" location="home">
      <section className="development-tools">
        <img className="web-development-graphic" src="images/web-browser-graphic.svg" alt="Web Development Tools" />
        <img className="vertical-mobile-graphic" src="images/vertical-phone-graphic.svg" alt="Mobile Development Tools" />
        <img className="horizontal-mobile-graphic" src="images/horizontal-phone-graphic.svg" alt="Mobile Development Tools" />
      </section>
    </Layout>

    <style jsx>{`
        .development-tools {
          position: relative;
          height: 50vw;
          top: -250px;
        }
        .web-development-graphic {
          width: 60vw;
          position: absolute;
          top: 0;
          left: 15vw;
        }
        .vertical-mobile-graphic {
          width: 22.5vw;
          position: absolute;
          top: 10vw;
          right: 16vw;
        }
        .horizontal-mobile-graphic {
          height: 22.5vw;
          position: absolute;
          top: 25vw;
          right: 22.5vw;
        }
    `}
    </style>
  </>
);

export default Home;
