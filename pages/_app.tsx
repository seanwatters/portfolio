import React from 'react';
import Styles from '../styles/global';

interface Props {
  Component: any,
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => (
  <>
    <Component {...pageProps} />
    <Styles />
  </>
);

export default MyApp;
