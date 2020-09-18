import React from 'react';

interface Props {
    isVisible: boolean;
    refInjection: any;
}

interface Icon {
  className: string;
  src: string;
  alt: string;
}

const SectionThree = ({ isVisible, refInjection }: Props) => (
  <>
    <section ref={refInjection}>
      <div className="pin-content-right">
        <h1 className={`section-header ${isVisible ? 'visible' : 'hidden'}`}>Design</h1>
        <p className={`section-body ${isVisible ? 'visible' : 'hidden'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon material-ui`}
          src="images/logos/material-ui.png"
          alt="Material UI"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon vuetify`}
          src="images/logos/vuetify.png"
          alt="Vuetify"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon material-design`}
          src="images/logos/material-design.png"
          alt="Material Design"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon tailwindcss`}
          src="images/logos/tailwindcss.png"
          alt="TailwindCSS"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon bootstrap`}
          src="images/logos/bootstrap.png"
          alt="Bootstrap"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon sass`}
          src="images/logos/sass.png"
          alt="SASS"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon adobe-xd`}
          src="images/logos/adobe-xd.png"
          alt="Adobe XD"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon adobe-illustrator`}
          src="images/logos/adobe-illustrator.png"
          alt="Adobe Illustrator"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon photoshop`}
          src="images/logos/photoshop.png"
          alt="Photoshop"
        />
        <img
          className={`${isVisible ? 'visible' : 'hidden'} icon invision`}
          src="images/logos/invision.svg"
          alt="Invision"
        />
      </div>
    </section>
    <style jsx>{`
        section {
          height: 125vh;
          margin: 0 auto;
          width: 60vw;
          position: relative;
          display: flex;
          justify-content: flex-end;
          background-color: white;
          padding: 0 20vw;
        }
        
        .section-header {
          font-size: 2.75rem;
          transition: opacity 1s;
          padding-top: 200px;
        }
        .section-body {
          transition: opacity 2s;
          transition-delay: 0.75s;
          padding-left: 10px;
          width: 580px;
          margin-bottom: 20px;
          color: #666;
        }
        .pin-content-right {
          display: relative;
        }

        .icon {
          box-shadow: 5px 5px 15px rgb(0,0,0,0.5);
          background-color: white;
          border-radius: 20%;
          position: absolute;
          margin-top: 200px;
        }
        .hidden {
          opacity: 0;
          top: 100vh;
        }

        .photoshop,
        .adobe-xd, 
        .adobe-illustrator { 
          height: 175px;
          width: 175px;
        }
        .photoshop {
          left: 550px;
          top: -50px;
          transition: opacity 2s, top 2s;
        }
        .adobe-xd {
          left: 300px;
          top: 100px;
          transition: opacity 2s;
          transition-delay: 0.35s;
        }
        .adobe-illustrator {
          left: 550px;
          top: 250px;
          transition: opacity 2s;
          transition-delay: 0.7s;
        }

        .invision {
          height: 125px;
          width: 125px;
          left: 670px;
          top: 70px;
          transition: opacity 2s;
          transition-delay: 0.5s;
        }
        .tailwindcss {
          width: 90px;
          height: 90px;
          top: -7.5px;
          left: 486px;
          z-index: 1;
          transition: opacity 1s;
          transition-delay: 0.5s;
        }

        .material-ui {
          height: 125px;
          width: 125px;
          left: 240px;
          top: 300px;
          transition: opacity 1.5s;
        } 
        .vuetify {
          height: 80px;
          width: 80px;
          padding: 22.5px;
          left: 1300px;
          top: 270px;
          transition: opacity 2s;
        }
        .material-design {
          padding: 15px;
          height: 80px;
          width: 80px;
          top: 225px;
          left: 425px;
          z-index: 1;
          transition: opacity 1s;
        }
        .bootstrap {
          height: 75px;
          width: 75px;
          left: 1400px;
          top: 360px;
          transition: opacity 0.5s;
        } 
        .sass {
          padding: 15px;
          height: 75px;
          width: 75px;
          left: 950px;
          top: 400px;
          z-index: 2;
          transition: opacity 3s;
        }
    `}
    </style>
  </>
);

export default SectionThree;
