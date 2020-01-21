import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "gatsby";
import { GlobalStyles, theme } from "../../styles";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main, PageContent } from "./elements";

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: `navlink-active navlink` } : { className: `navlink` };

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
);

export const Layout: React.FC = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Header />
        <PageContent {...props}>{children}</PageContent>
        <Footer />
      </Main>
    </ThemeProvider>
  );
};
