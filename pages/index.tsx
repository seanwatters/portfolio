import React, { useState, useEffect } from 'react';
import useScroll from 'hooks/useScroll';

import Layout from 'components/Layout';

const TITLE_WRAPPER_HEIGHT = 450;
const SECTION_HEIGHT = 900;

const SECTION_ONE_BREAK = TITLE_WRAPPER_HEIGHT / 2;
const SECTION_TWO_BREAK = TITLE_WRAPPER_HEIGHT + (SECTION_HEIGHT / 2);
const SECTION_THREE_BREAK = TITLE_WRAPPER_HEIGHT + SECTION_HEIGHT + (SECTION_HEIGHT / 2);
const SECTION_FOUR_BREAK = TITLE_WRAPPER_HEIGHT + (SECTION_HEIGHT * 2) + (SECTION_HEIGHT / 2);

const Home = () => {
  const { scrollY } = useScroll();

  const [sectionOneVisible, setSectionOneVisible] = useState(false);
  const [sectionTwoVisible, setSectionTwoVisible] = useState(false);
  const [sectionThreeVisible, setSectionThreeVisible] = useState(false);
  const [sectionFourVisible, setSectionFourVisible] = useState(false);

  useEffect(() => {
    switch (true) {
      case scrollY >= SECTION_FOUR_BREAK:
        setSectionFourVisible(true);
        break;
      case scrollY >= SECTION_THREE_BREAK:
        setSectionThreeVisible(true);
        break;
      case scrollY >= SECTION_TWO_BREAK:
        setSectionTwoVisible(true);
        break;
      case scrollY >= SECTION_ONE_BREAK:
        setSectionOneVisible(true);
        break;
      default:
        break;
    }
  }, [scrollY]);

  return (
    <>
      <Layout title="Sean Watters — Software Engineer">
        <div className="page-title-wrapper">
          <h1 className="page-title-1">Developer.</h1>
          <h1 className="page-title-2">Designer.</h1>
          <h1 className="page-title-3">Engineer.</h1>
        </div>
        <section className="section-1">
          <img
            className={`section-1-browser-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/web-frameworks-browser.svg"
            alt="Web Development Tools"
          />
          <img
            className={`section-1-vertical-mobile-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/mobile-frameworks-vertical.svg"
            alt="Mobile Development Tools"
          />
          <img
            className={`section-1-horizontal-mobile-graphic ${sectionOneVisible ? 'visible' : 'hidden'}`}
            src="images/mobile-frameworks-horizontal.svg"
            alt="Mobile Development Tools"
          />
        </section>
        <section className="section-2">
          <h1 className={`section-header ${sectionTwoVisible ? 'visible' : 'hidden'}`}>Web Development</h1>
          <div className={`section-body ${sectionTwoVisible ? 'visible' : 'hidden'}`}>
            <p>
              This web page is built with React.js — more specifically it&apos;s a
              statically rendered React application built using Next.js and hosted on a Netlify CDN.
            </p>
            <p>
              You see this same website built with <a href="https://vue.seanwatters.io">Vue.js</a> and <a href="https://svelte.seanwatters.io">Svelte</a>.
            </p>
          </div>
        </section>
        <section className="section-3">
          <div className="pin-content-right">
            <h1 className={`section-header ${sectionThreeVisible ? 'visible' : 'hidden'}`}>Mobile Development</h1>
            <div className={`section-body ${sectionThreeVisible ? 'visible' : 'hidden'}`}>
              <p>
                statically rendered React application built using Next.js and hosted
                on a Netlify CDN. This web page is built with
                React.js — more specifically it&apos;s a
                You see this same website built with.
                ion built using Next.js and hosted on a Netlify CDN.
              </p>
            </div>
          </div>
        </section>
        <section className="section-4">
          <h1 className={`section-header ${sectionFourVisible ? 'visible' : 'hidden'}`}>Designer</h1>
          <div className={`section-body ${sectionFourVisible ? 'visible' : 'hidden'}`}>
            <p>
              statically rendered React application built using Next.js and hosted
              on a Netlify CDN. This web page is built with
              React.js — more specifically it&apos;s a
              You see this same website built with.
              ion built using Next.js and hosted on a Netlify CDN.
            </p>
          </div>
        </section>
      </Layout>

      <style jsx>{`
        p {
          width: 580px;
          margin-bottom: 20px;
        }
        .page-title-wrapper {
          height: ${TITLE_WRAPPER_HEIGHT}px;
          margin-left: 20vw;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .page-title-1,
        .page-title-2,
        .page-title-3 {
          font-size: 5rem;
          opacity: 0;
          animation: titleFadeIn;
          animation-duration: 2s;
          animation-fill-mode: forwards;  
        }
        .page-title-2 {
          animation-delay: 0.5s;
        }
        .page-title-3 {
          animation-delay: 1s;
        }
        @keyframes titleFadeIn {
          to {
            opacity: 1;
          }
        }

        section {
          height: ${SECTION_HEIGHT}px;
          margin: 0 auto;
          width: 60vw;
          position: relative;
        }
        
        .section-1 {
          width: 100vw;
        }

        .visible.section-1-browser-graphic {
          width: 60vw;
          top: 0;
          left: 15vw;
          transition: top 1.25s, opacity 1.25s;
        }

        .visible.section-1-vertical-mobile-graphic {
          width: 22.5vw;
          top: 10vw;
          right: 16vw;
          transition: top 1.25s, opacity 1.5s;
          transition-delay: 0.25s;
        }

        .visible.section-1-horizontal-mobile-graphic {
          height: 22.5vw;
          top: 25vw;
          right: 22.5vw;
          transition: top 1.25s, opacity 1.75s;
          transition-delay: 0.5s;
        }

        .section-1-browser-graphic,
        .section-1-vertical-mobile-graphic,
        .section-1-horizontal-mobile-graphic  {
          position: absolute;
        }

        .visible  {
          opacity: 1;
        }

        .hidden.section-1-browser-graphic,
        .hidden.section-1-vertical-mobile-graphic,
        .hidden.section-1-horizontal-mobile-graphic  {
          top: 100vh;
          opacity: 0;
        }

        .section-header {
          transition: opacity 1s;
        }
        .section-body {
          transition: opacity 2s;
          transition-delay: 0.75s;
        }
        .visible.section-header,
        .visible.section-body {
          opacity: 1;
        }
        .hidden.section-header,
        .hidden.section-body {
          opacity: 0;
        }
        
        .section-2 {
        }

        .section-3 {
          display: flex;
          justify-content: flex-end;
        }

        .section-4 {
        }
    `}
      </style>
    </>
  );
};

export default Home;
