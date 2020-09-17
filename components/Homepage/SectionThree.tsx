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
        <div className={`section-body ${isVisible ? 'visible' : 'hidden'}`}>
          <p>
            statically rendered React application built using Next.js and hosted
            on a Netlify CDN. This web page is built with
            React.js — more specifically it&apos;s a
            You see this same website built with.
            ion built using Next.js and hosted on a Netlify CDN.
          </p>
        </div>
        {iconList.map(({ className, src, alt }: Icon) => (
          <img
            key={Math.random() + className}
            className={`${className} icon`}
            src={src}
            alt={alt}
          />
        ))}
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
        }
        
        .section-header {
          font-size: 2.75rem;
          transition: opacity 1s;
        }
        .section-body {
          transition: opacity 2s;
          transition-delay: 0.75s;
          padding-left: 10px;
          width: 580px;
          margin-bottom: 20px;
          color: #666;
        }
        .hidden.section-header,
        .hidden.section-body {
          opacity: 0;
        }
        .pin-content-right {
          display: relative;
        }
        .icon {
          box-shadow: 5px 5px 15px rgb(0,0,0,0.5);
          background-color: white;
          border-radius: 20%;
          position: absolute;
        }

        .adobe-illustrator, 
        .adobe-xd, 
        .photoshop {
          height: 175px;
          width: 175px;
        }
        .adobe-xd {
          left: -200px;
          top: 100px;
        }
        .adobe-illustrator {
          left: 50px;
          top: 250px;
        }
        .photoshop {
          left: 50px;
          top: -50px;
        }

        .invision {
          left: 170px;
          top: 70px;
        }
        .sketch {
          left: -275px;
          top: 250px;
        }
        .invision, 
        .sketch {
          height: 125px;
          width: 125px;
        }

        .material-ui {
          height: 125px;
          width: 125px;
          left: -260px;
          top: 300px;
        } 
        .vuetify {
          height: 80px;
          width: 80px;
          padding: 22.5px;
          left: 800px;
        }
        .material-design {
          padding: 15px;
          height: 80px;
          width: 80px;
          top: 225px;
          left: -75px;
          z-index: 1;
        }
        .tailwindcss {
          width: 90px;
          height: 90px;
          top: -7.5px;
          left: -14px;
          z-index: 1;
        }
        .bootstrap {
          height: 75px;
          width: 75px;
          left: 900px;
          top: 360px;
        } 
        .sass {
          padding: 15px;
          height: 75px;
          width: 75px;
          left: 550px;
          top: 400px;
          z-index: 2;
        }
    `}
    </style>
  </>
);

const iconList: Icon[] = [
  {
    className: 'material-ui',
    src: 'images/logos/material-ui.png',
    alt: 'Material UI',
  },
  {
    className: 'vuetify',
    src: 'images/logos/vuetify.png',
    alt: 'Vuetify',
  },
  {
    className: 'material-design',
    src: 'images/logos/material-design.png',
    alt: 'Material Design',
  },
  {
    className: 'tailwindcss',
    src: 'images/logos/tailwindcss.png',
    alt: 'TailwindCSS',
  },
  {
    className: 'bootstrap',
    src: 'images/logos/bootstrap.png',
    alt: 'Bootstrap',
  },
  {
    className: 'sass',
    src: 'images/logos/sass.png',
    alt: 'SASS',
  },
  {
    className: 'adobe-xd',
    src: 'images/logos/adobe-xd.png',
    alt: 'Adobe XD',
  },
  {
    className: 'adobe-illustrator',
    src: 'images/logos/adobe-illustrator.png',
    alt: 'Adobe Illustrator',
  },
  {
    className: 'photoshop',
    src: 'images/logos/photoshop.png',
    alt: 'Photoshop',
  },
  {
    className: 'invision',
    src: 'images/logos/invision.svg',
    alt: 'Invision',
  },
];

export default SectionThree;
