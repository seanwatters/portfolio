import React from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: any[] | any
    title: string
    location: string
}

const Layout = ({
  children,
  title,
  location,
}: Props) => {
  const isAmp = useAmp();

  return (
    <>
      <div id="page-container">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Information about Sean Watters."
          />
          {isAmp ? (
            <>
              {/* <script
                async
                custom-element="amp-analytics"
                src="https://cdn.ampproject.org/v0/amp-analytics-1.0.js"
                key="amp-analytics"
              />
              <amp-analytics type="googleanalytics">
                <script
                  type="application/json"
                  dangerouslySetInnerHTML={{
                    __html: `
                  {
                    "vars": {
                      "account": "UA-167813886-1"
                    },
                    "triggers": {
                      "trackPageview": {
                        "on": "visible",
                        "request": "pageview"
                      }
                    }
                  }
                `,
                  }}
                />
              </amp-analytics> */}
            </>
          ) : (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-167813886-1" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-167813886-1');
              `,
                }}
              />
            </>
          )}
        </Head>
        <Header location={location} />
        <main>
          {children}
        </main>
        <Footer />
      </div>

      <style jsx>{`
      main {
        padding-bottom: 150px;
      }    
  `}
      </style>
    </>
  );
};

export default Layout;
