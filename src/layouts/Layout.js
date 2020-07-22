import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Navbar from 'components/Navbar/Navbar';
import ReturnToTop from 'components/ReturnToTop/ReturnToTop';
import useTheme from 'hooks/useTheme';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 60px 20px 30px;
  ${({ theme }) => theme.mq.xs} {
    padding: 80px 20px 40px;
  }
`;

const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <ReturnToTop />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
