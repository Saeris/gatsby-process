import React from "react"
import { ThemeProvider } from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import "typeface-work-sans"
import { GlobalStyles, theme } from "../../styles"
import { Box, Flex } from "../elements"
import { Logo } from "../Logo"
import { Wrapper, SideBarInner, Nav, Main, Footer } from "./elements"

const isPartiallyActive = ({
  isPartiallyCurrent
}: {
  isPartiallyCurrent: boolean
}) =>
  isPartiallyCurrent
    ? { className: "navlink-active navlink" }
    : { className: "navlink" }

const PartialNavLink = ({
  children,
  to,
  ...rest
}: {
  children: React.ReactNode
  to: string
}) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

interface LayoutProps {
  color?: string
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

export const Layout: React.FC<LayoutProps> = ({
  color = "white",
  children
}) => {
  const data: QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
            <Flex
              flexWrap="nowrap"
              flexDirection={["row", "row", "row", "column"]}
              alignItems={["center", "center", "center", "flex-start"]}
              justifyContent="space-between"
            >
              <Box width={["3rem", "4rem", "5rem", "6rem"]}>
                <Link to="/" aria-label="LekoArts, Back to Home">
                  <Logo />
                </Link>
              </Box>
              <Nav
                color={color}
                mt={[0, 0, 0, 10]}
                as="nav"
                flexWrap="nowrap"
                flexDirection={["row", "row", "row", "column"]}
                alignItems="flex-start"
              >
                {data.navigation.nodes.map(item => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
              </Nav>
            </Flex>
          </SideBarInner>
          <Main>{children}</Main>
          <Footer color={color}>
            <Box p={[6, 6, 8]} fontSize={0}>
              Starter by <a href="https://www.lekoarts.de/en">LekoArts</a>.
              <br />
              <a href="https://github.com/LekoArts/gatsby-starter-portfolio-jodie">
                Source
              </a>
              .
            </Box>
          </Footer>
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`
