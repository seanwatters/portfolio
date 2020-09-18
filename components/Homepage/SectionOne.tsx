import React from 'react';

interface Props {
    isVisible: boolean
    refInjection: any
}

const SectionOne = ({ isVisible, refInjection }: Props) => (
  <>
    <section ref={refInjection}>
      <div className="header">
        <h1 className="title-1">Developer.</h1>
        <h1 className="title-2">Designer.</h1>
        <h1 className="title-3">Engineer.</h1>
      </div>
      <img
        className={`browser ${isVisible ? 'visible' : 'hidden'}`}
        src="images/web-browser.svg"
        alt="Web Development Tools"
      />
      <img
        className={`mobile-vertical ${isVisible ? 'visible' : 'hidden'}`}
        src="images/mobile-vertical.svg"
        alt="Mobile Development Tools"
      />
      <img
        className={`mobile-horizontal ${isVisible ? 'visible' : 'hidden'}`}
        src="images/mobile-horizontal.svg"
        alt="Mobile Development Tools"
      />
    </section>
    <style jsx>{`
        section {
          height: 100vh;
          min-height: 600px;
          margin: 0 auto;
          width: 80vw;
          position: relative;
          margin-top: 100px;
        }
        h1 {
          font-size: 2.5rem;
          line-height: 1.3;
          opacity: 0;
          animation: titleFadeIn;
          animation-duration: 2s;
          animation-fill-mode: forwards;  
          transition: font-size 1s;
        }
        .title-2 {
          animation-delay: 0.5s;
        }
        .title-3 {
          animation-delay: 1s;
        }
        @keyframes titleFadeIn {
          to {
            opacity: 1;
          }
        }

        .browser,
        .mobile-vertical,
        .mobile-horizontal  {
          position: absolute;
        }

        .visible  {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }

        .browser {
          top: 175px;
          width: 105vw;
          right: -11vw;
          transition-delay: 0.75s;
          transition: opacity 1s, left 1s, right 1s;
        }
        .mobile-vertical {
          top: 70vw;
          left: 57vw;
          width: 40vw;
          transition-delay: 1s;
          transition: opacity 1.25s, left 1s, right 1s;
        }
        .mobile-horizontal {
          top: 95vw;
          left: 28vw;
          height: 40vw;
          transition-delay: 1.25s;
          transition: opacity 2s, left 1s, right 1s;
        }

        @media (min-width: 576px) { 
          section {
            width: 450px;
            margin-top: 80px;
            height: 90vh;
            min-height: 835px;
          }
          h1 {
            font-size: 2.75rem;
            line-height: 1.3;  
          }
          .visible.browser {
            top: 190px;
            width: 620px;
            right: -90px;
          }
          .visible.mobile-vertical {
            top: 0px;
            left: 300px;
            width: 250px;
          }
          .visible.mobile-horizontal {
            top: 150px;
            left: 125px;
            height: 250px;
          }
        }

        @media (min-width: 768px) { 
          section {
            width: 650px;
            margin-top: 100px;
            height: 100vh;
            min-height: 950px;
          }
          h1 {
            font-size: 3.5rem;
            line-height: 1.3;  
          }
          .visible.browser {
            top: 230px;
            width: 800px;
            right: -70px;
          }
          .visible.mobile-vertical {
            top: 80px;
            left: 445px;
            width: 315px;
          }
          .visible.mobile-horizontal {
            top: 280px;
            left: 235px;
            height: 320px;
          }
        }

        @media (min-width: 992px) {
            section {
              width: 790px;
              margin-top: 150px;
              height: 125vh;
            }
            h1 {
              font-size: 4rem;
              line-height: 1.3;  
            }
            .visible.browser {
              top: 115px;
              width: 850px;
              right: -325px;
            }
            .visible.mobile-vertical {
              top: 240px;
              left: -120px;
              width: 350px;
            }
            .visible.mobile-horizontal {
              top: 435px;
              left: -100px;
              height: 350px;
            }
        }

        @media (min-width: 1200px) { 
            section {
              width: 1000px;
              margin-top: 150px;
              height: 125vh;
            }
            h1 {
              font-size: 4.5rem;
              line-height: 1.3;  
            }
            .visible.browser {
              top: 115px;
              width: 1150px;
              right: -480px;
            }
            .visible.mobile-vertical {
              top: 265px;
              left: -250px;
              width: 435px;
            }
            .visible.mobile-horizontal {
              top: 515px;
              left: -200px;
              height: 435px;
            }
        }
    `}
    </style>
  </>
);

export default SectionOne;
