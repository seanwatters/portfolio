import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: any[] | any
    title: string
    location?: string
}

const Layout = ({
  children,
  title,
  location,
}: Props) => (
  <>
    <div id="page-container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Information about Sean Watters."
        />

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
        padding-top: 35px;
      } 
  `}
    </style>
  </>
);

export default Layout;
