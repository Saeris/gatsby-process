import styled, { css } from "styled-components";

export const content = css`
  grid-column: content;
  max-width: 60ch;
`;

const columns = 12;

const sidebarWidth = css`minmax(15rem, 1fr)`;

const singleColumnWidth = css`calc((72 / ${columns}) * 1ch)`;

const columnWidth = css`minmax(0, ${singleColumnWidth})`;

export const Section = styled.section(
  ({ theme }) => css`
    display: grid;
    grid-template-columns:
      [full-start siderbar-left-start]
      ${sidebarWidth}
      [siderbar-left-end wide-start aside-left-start]
      ${columnWidth}
      [content-start aside-content-right-start]
      repeat(2, ${columnWidth})
      [aside-left-end aside-content-left-start]
      repeat(4, ${columnWidth})
      [aside-content-right-end aside-right-start]
      repeat(2, ${columnWidth})
      [content-end aside-content-left-end]
      ${columnWidth}
      [aside-right-end wide-end sidebar-right-start]
      ${sidebarWidth}
      [sidebar-right-end full-end];
    grid-column-gap: 1ch;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    margin: 0;
  `
);

interface AsideProps {
  side?: "left" | "right" | undefined;
}

export const Aside = styled.div<AsideProps>(
  ({ side }) => css`
    ${side && `grid-column: aside-${side};`};
  `
);

export const AsideContent = styled.div<AsideProps>(
  ({ side }) => css`
    ${side && `grid-column: aside-content-${side}`};
  `
);

export const Centered = styled.div`
  ${content};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
