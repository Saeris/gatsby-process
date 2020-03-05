import styled, { css } from "styled-components";

export const content = css`
  grid-column: content;
  max-width: 60ch;
`;

const columns = 12;

const sidebarWidth = css`minmax(15rem, 1fr)`;

export const singleColumnWidth = css`calc((72 / ${columns}) * 1ch)`;

export const columnWidth = css`minmax(0, ${singleColumnWidth})`;

export const Section = styled.section(
  () => css`
    display: grid;
    grid-template-columns:
      [full-start siderbarLeft-start]
      ${sidebarWidth}
      [siderbarLeft-end wide-start asideLeft-start]
      ${columnWidth}
      [content-start asideContentRight-start]
      repeat(2, ${columnWidth})
      [asideLeft-end asideContentLeft-start]
      repeat(4, ${columnWidth})
      [asideContentRight-end asideRight-start]
      repeat(2, ${columnWidth})
      [content-end asideContentLeft-end]
      ${columnWidth}
      [asideRight-end wide-end sidebarRight-start]
      ${sidebarWidth}
      [sidebarRight-end full-end];
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
