import React, { useState, useEffect } from 'react';
import useScroll from 'hooks/useScroll';

import Layout from 'components/Layout';

const Home = () => {
  const { scrollY } = useScroll();

  const [sectionOneVisible, setSectionOneVisible] = useState(false);
  const [sectionTwoVisible, setSectionTwoVisible] = useState(false);
  const [sectionThreeVisible, setSectionThreeVisible] = useState(false);
  const [sectionFourVisible, setSectionFourVisible] = useState(false);
  const [sectionFiveVisible, setSectionFiveVisible] = useState(false);

  useEffect(() => {
    switch (true) {
      case scrollY >= 225:
        setSectionOneVisible(true);
        break;
      default:
        break;
    }
  }, [scrollY]);

  return (
    <>
      <Layout title="Sean Watters — Software Engineer">
        <h1 className="header-title">Developer. Designer. Software&nbsp;Engineer.</h1>
        <section className="section-one">
          <img
            className={`section-one-browser-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/web-frameworks-browser.svg"
            alt="Web Development Tools"
          />
          <img
            className={`section-one-vertical-mobile-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/mobile-frameworks-vertical.svg"
            alt="Mobile Development Tools"
          />
          <img
            className={`section-one-horizontal-mobile-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/mobile-frameworks-horizontal.svg"
            alt="Mobile Development Tools"
          />
        </section>
        <section className="section-two">
          <h1 className="section-header">Web Development</h1>
          <p>
            This web page is built with React.js — more specifically it&apos;s a
            statically rendered React application built using Next.js and hosted on a Netlify CDN.
          </p>
          <p>
            You see this same website built with <a href="https://vue.seanwatters.io">Vue.js</a> and <a href="https://svelte.seanwatters.io">Svelte</a>.
          </p>
        </section>
        <section className="section-three">
          <div>
            <h1 className="section-header">Mobile Development</h1>
            <p>
              statically rendered React application built using Next.js and hosted on a Netlify CDN.
              This web page is built with React.js — more specifically it&apos;s a
              You see this same website built with.
              ion built using Next.js and hosted on a Netlify CDN.
            </p>
          </div>
        </section>
        <section className="section-four">
          <h1 className="section-header">Design</h1>
        </section>
      </Layout>

      <style jsx>{`
        p {
          width: 580px;
          margin-bottom: 20px;
        }
      
        .header-title {
          margin-top: 150px;
          margin-left: 20vw;
          font-size: 4.5rem;
          width: 0;
          margin-bottom: 175px;
          animation: titleFadeIn;
          animation-duration: 2s;
        }
        @keyframes titleFadeIn {
          to {
            opacity: 1;
          }
          from {
            opacity: 0;
          }
        }


        .section-one {
          position: relative;
          height: 1000px;
        }

        .visible.section-one-browser-graphic {
          width: 60vw;
          top: 0;
          left: 15vw;
          transition: top 1.25s, opacity 1.25s;
        }

        .visible.section-one-vertical-mobile-graphic {
          width: 22.5vw;
          top: 10vw;
          right: 16vw;
          transition: top 1.25s, opacity 1.5s;
        }

        .visible.section-one-horizontal-mobile-graphic {
          height: 22.5vw;
          top: 25vw;
          right: 22.5vw;
          transition: top 1.25s, opacity 1.75s;
        }

        .section-one-browser-graphic,
        .section-one-vertical-mobile-graphic,
        .section-one-horizontal-mobile-graphic  {
          position: absolute;
        }

        .visible  {
          opacity: 1;
        }

        .hidden.section-one-browser-graphic,
        .hidden.section-one-vertical-mobile-graphic,
        .hidden.section-one-horizontal-mobile-graphic  {
          top: 100vh;
          opacity: 0;
        }
        
        .section-two {
          width: 60vw;
          margin: 0 auto;
          height: 80vh;
          margin-top: 70px;
          position: relative;
        }

        .section-three {
          width: 60vw;
          margin: 0 auto;
          height: 70vh;
          display: flex;
          justify-content: flex-end;
        }

        .section-four {
          width: 60vw;
          margin: 0 auto;
          height: 70vh;
        }
    `}
      </style>
    </>
  );
};

export default Home;
