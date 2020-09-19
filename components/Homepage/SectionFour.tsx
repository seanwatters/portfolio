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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
    <style jsx>{`
        section {
          height: 110vh;
          margin: 0 auto;
          width: 100vw;
          position: relative;
          background-color: black;
        }
        .section-header {
          color: white;
          margin-left: 20vw;
          padding-top: 200px;
          font-size: 2.75rem;
          transition: opacity 1s;
        }
        .section-body {
          margin-left: 20vw;
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
