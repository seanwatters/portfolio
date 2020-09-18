import React from 'react';

const styles = () => (
  <style jsx global>{`
      /* desktop */
      html {
        padding: 0px;
        margin: 0px;
      }
      body {
        padding: 0px;
        margin: 0px;
        color: #111;
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      }

      a:link {
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
      }
      a:active {
        text-decoration: underline;
      }
      a:hover {
        text-decoration: underline;
      }

      a {
        color: #06c;
      }

      h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
      }

      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      h4 {
        z-index: 100;
        font-size: 1.7em;
        line-height: 95%;
        margin-right: 11%;
        margin-left: 11%;
        clear: both
      }
      p {
        font-size: 1.15rem;
        line-height: 250%;
      }
      ul {
        margin: auto;
        width: 40%;
        font-size: 16px;
        line-height: 150%;
      }

      /* phone */
      @media only screen and (max-width : 420px) {
        h1 {
          font-size: 25px;
        }
        p {
          margin-top: 10px;
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 200%;
          max-width: 87%;
          min-width: 87%;
        }
      }
`}</style>
);

export default styles;
