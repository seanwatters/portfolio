import React from 'react';

interface Props {
    isVisible: boolean
    refInjection: any
}

const SectionOne = ({ isVisible, refInjection }: Props) => (
  <>
    <section ref={refInjection}>
      <div className="section-1-header">
        <h1 className="section-title-1">Developer.</h1>
        <h1 className="section-title-2">Designer.</h1>
        <h1 className="section-title-3">Engineer.</h1>
      </div>
      <img
        className={`section-1-browser ${isVisible ? 'visible' : 'hidden'}`}
        src="images/web-browser.svg"
        alt="Web Development Tools"
      />
      <img
        className={`section-1-mobile-vertical ${isVisible ? 'visible' : 'hidden'}`}
        src="images/mobile-vertical.svg"
        alt="Mobile Development Tools"
      />
      <img
        className={`section-1-mobile-horizontal ${isVisible ? 'visible' : 'hidden'}`}
        src="images/mobile-horizontal.svg"
        alt="Mobile Development Tools"
      />
    </section>
    <style jsx>{`
        section {
          height: 125vh;
          margin: 0 auto;
          width: 60vw;
          position: relative;
          margin-top: 150px;
        }

        .section-1-header {
          position: relative;
          z-index: 1;
        }
        .section-title-1,
        .section-title-2,
        .section-title-3 {
          font-size: 4.5rem;
          line-height: 1.3;
          opacity: 0;
          animation: titleFadeIn;
          animation-duration: 2s;
          animation-fill-mode: forwards;  
        }
        .section-title-2 {
          animation-delay: 0.5s;
        }
        .section-title-3 {
          animation-delay: 1s;
        }
        @keyframes titleFadeIn {
          to {
            opacity: 1;
          }
        }

        .visible.section-1-browser {
          width: 950px;
          top: 100px;
          left: 350px;
          transition: top 1.25s, opacity 1.25s;
        }
        .visible.section-1-mobile-vertical {
          width: 370px;
          top: 300px;
          left: -200px;
          transition: top 1.25s, opacity 1.5s;
          transition-delay: 0.25s;
        }
        .visible.section-1-mobile-horizontal {
          height: 370px;
          top: 515px;
          left: -150px;
          transition: top 1.25s, opacity 1.75s;
          transition-delay: 0.5s;
        }
        .section-1-browser,
        .section-1-mobile-vertical,
        .section-1-mobile-horizontal  {
          position: absolute;
        }
        .visible  {
          opacity: 1;
        }
        .hidden.section-1-browser,
        .hidden.section-1-mobile-vertical,
        .hidden.section-1-mobile-horizontal  {
          top: 100vh;
          opacity: 0;
        } 
    `}
    </style>
  </>
);

export default SectionOne;
