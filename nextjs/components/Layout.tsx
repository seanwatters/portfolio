import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: any[] | any;
    title: string;
    location?: string;
    theme?: string;
}

const Layout = ({
  children,
  title,
  location,
  theme = 'light',
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

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-167813886-1', 'auto');
            ga('send', 'pageview');`,
          }}
        />
        <script async src="https://www.google-analytics.com/analytics.js" />

      </Head>
      <Header
        location={location}
      />
      <main>
        {children}
      </main>
      <Footer theme={theme} />
    </div>

    <style jsx>{`
      main {
        width: 100vw;
        overflow: hidden;
        padding-top: 35px;
      } 
  `}
    </style>
  </>
);

export default Layout;
