// @flow

import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

type Props = { children: React$MixedElement };

function Layout(props: Props): React$MixedElement {
  const { children } = props;
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
}

export default Layout;
