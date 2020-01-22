import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../../styles";
import { SEO } from "./SEO";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main, PageContent } from "./elements";

interface LayoutProps {
  seo?: React.ComponentProps<typeof SEO>;
}

export const Layout: React.FC<LayoutProps> = ({ seo, children, ...props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SEO {...seo} />
    <Main>
      <Header />
      <PageContent {...props}>{children}</PageContent>
      <Footer />
    </Main>
  </ThemeProvider>
);
