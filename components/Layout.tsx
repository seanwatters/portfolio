import React from 'react';
import Head from 'next/head';

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
      </Head>
      <Header location={location} />
      <main>
        {children}
      </main>
      <Footer />
    </div>

    <style jsx>{`
      main {
        padding-bottom: 100px;
      }    
  `}</style>
  </>
);

export default Layout;
