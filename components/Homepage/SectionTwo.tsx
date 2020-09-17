import React from 'react';

interface Props {
    isVisible: boolean
    refInjection: any
}

const SectionTwo = ({ isVisible, refInjection }: Props) => (
  <>
    <section ref={refInjection}>
      <h1 className={`section-header ${isVisible ? 'visible' : 'hidden'}`}>Development</h1>
      <div className={`section-body ${isVisible ? 'visible' : 'hidden'}`}>
        <p>
          This web page is built with React.js — more specifically it&apos;s a
          statically rendered React application built using Next.js and hosted on a Netlify CDN.
        </p>
        <p>
          You see this same website built with <a href="https://vue.seanwatters.io">Vue.js</a> and <a href="https://svelte.seanwatters.io">Svelte</a>.
        </p>
      </div>
      <img
        className={`section-2-development-browser ${isVisible ? 'visible' : 'hidden'}`}
        src="images/development-browser.svg"
        alt="Developer Browser"
      />
      <img
        className={`section-2-text-editor-dark ${isVisible ? 'visible' : 'hidden'}`}
        src="images/text-editor-dark.svg"
        alt="React Editor"
      />
    </section>
    <style jsx>{`
        section {
          height: 125vh;
          margin: 0 auto;
          width: 60vw;
          position: relative;
          width: 75vw;
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
        .visible.section-2-development-browser {
          width: 950px;
          top: 125px;
          right: -260px;
          transition: top 1.25s, opacity 1.25s;
        }

        .visible.section-2-text-editor-dark {
          width: 775px;
          top: 325px;
          right: 100px;
          transition: top 1.25s, opacity 1.5s;
          transition-delay: 0.25s;
        }

        .section-2-development-browser,
        .section-2-text-editor-dark {
          position: absolute;
        }

        .hidden.section-2-development-browser,
        .hidden.section-2-text-editor-dark {
          top: 100vh;
          opacity: 0;
        }
    `}
    </style>
  </>
);

export default SectionTwo;
