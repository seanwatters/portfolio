import React from 'react';

interface Props {
    isVisible: boolean
    refInjection: any
}

const SectionFour = ({ isVisible, refInjection }: Props) => (
  <>
    <section ref={refInjection}>
      <h1 className={`section-header ${isVisible ? 'visible' : 'hidden'}`}>Engineering</h1>
      <div className={`section-body ${isVisible ? 'visible' : 'hidden'}`}>
        <p>
          statically rendered React application built using Next.js and hosted
          on a Netlify CDN. This web page is built with
          React.js — more specifically it&apos;s a
          You see this same website built with.
          ion built using Next.js and hosted on a Netlify CDN.
        </p>
      </div>
    </section>
    <style jsx>{`
        section {
          height: 125vh;
          margin: 0 auto;
          width: 60vw;
          position: relative;
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
    `}
    </style>
  </>
);

export default SectionFour;
