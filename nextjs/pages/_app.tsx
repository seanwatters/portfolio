import React from 'react';
import Styles from '../styles/global';

interface Props {
  Component: any,
  pageProps: any
}

const App = ({ Component, pageProps }: Props) => (
  <>
    <Component {...pageProps} />
    <Styles />
  </>
);

export default App;
