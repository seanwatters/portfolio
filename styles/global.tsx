import React from 'react';

const styles = () => (
  <style jsx global>{`
      /* desktop */
      body {
        padding: 0px;
        margin: 0px;
        background-color: white;
      }

      a:link {
        text-decoration: none;
        color: black;
      }
      a:visited {
        text-decoration: none;
        color: black;
      }
      a:active {
        text-decoration: underline;
      }

      h1 {
        font-size: 30px;
        font-weight: 100;
        color: black;
        font-family: monospace;
      }

      h2 {
        z-index: 100;
        font-weight: 100;
        font-size: 3.5em;
        color: black;
        line-height: 95%;
        margin-right: 95px;
        margin-left: 95px;
        float: left;
        clear: both;
      }
      h3 {
        margin: auto;
        margin-top: 30px;
        max-width: 50%;
        min-width: 740px;
        font-size: 20px;
        color: black;
        line-height: 120%;
        font-family: "Courier New", Courier, monospace;
        clear: both;
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
        font-family: "Courier New", Courier, monospace;
        line-height: 250%;
        color: black;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 15px;
        max-width: 50%;
        min-width: 740px;
      }
      ul {
        margin: auto;
        width: 40%;
        font-size: 16px;
        font-family: "Courier New", Courier, monospace;
        line-height: 150%;
      }

      body {
        position: relative;
        min-height: 100vh;
      }

      main {
        padding-bottom: 300px;
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
