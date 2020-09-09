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
        font-family: "sohne-var","Helvetica Neue","Arial",sans-serif;
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

      h1, h2, h3, h4, h5, h6 {
        color: black;
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 2.5rem;
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
        color: black;
        line-height: 95%;
        margin-right: 11%;
        margin-left: 11%;
        clear: both
      }
      p {
        font-size: 16px;
        line-height: 250%;
        color: black;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 15px;
      }
      ul {
        margin: auto;
        width: 40%;
        font-size: 16px;
        line-height: 150%;
      }

      body {
        position: relative;
        min-height: 100vh;
      }

      footer {
        position: absolute;
        bottom: 0;
        width: 100%;
      }
        
      /* tablet */
      @media only screen and (min-width: 421px) and (max-width : 768px) {

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
