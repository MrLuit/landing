/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';

import { Flex } from '../';
// import Header from './header';
// import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {/* <Header siteTitle={site.siteMetadata.title} /> */}
      <Flex sx={{}}>
        <main role="main">{children}</main>
      </Flex>
      {/* <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">
          <Text>Gatsby</Text>
        </Link>
      </Footer> */}
    </>
  );
};

export default Layout;
