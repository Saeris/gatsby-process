import styled, { css } from "styled-components";
import { capitalize } from "../../utils"

export const content = css`
  grid-column: content;
  max-width: 60ch;
`;

const columns = 12;

const sidebarWidth = css`minmax(15rem, 1fr)`;

export const singleColumnWidth = css`calc((72 / ${columns}) * 1ch)`;

export const columnWidth = css`minmax(0, ${singleColumnWidth})`;

export const Section = styled.section(
  ({ theme }) => css`
    display: grid;
    grid-template-columns:
      [full-start siderbarLeft-start]
      ${sidebarWidth}
      [siderbarLeft-end wide-start asideLeft-start splitLeft-start]
      ${columnWidth}
      [content-start asideContentRight-start]
      repeat(2, ${columnWidth})
      [asideLeft-end asideContentLeft-start]
      repeat(2, ${columnWidth})
      [splitLeft-end splitRight-start]
      repeat(2, ${columnWidth})
      [asideContentRight-end asideRight-start]
      repeat(2, ${columnWidth})
      [content-end asideContentLeft-end]
      ${columnWidth}
      [splitRight-end asideRight-end wide-end sidebarRight-start]
      ${sidebarWidth}
      [sidebarRight-end full-end];
    grid-column-gap: 1ch;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    margin: 0;

    ${theme.media.lessThan(theme.breakpoints.laptopLarge)} {
      grid-template-columns:
        [full-start wide-start asideLeft-start splitLeft-start]
        ${columnWidth}
        [content-start asideContentRight-start]
        repeat(2, ${columnWidth})
        [asideLeft-end asideContentLeft-start]
        repeat(2, ${columnWidth})
        [splitLeft-end splitRight-start]
        repeat(2, ${columnWidth})
        [asideContentRight-end asideRight-start]
        repeat(2, ${columnWidth})
        [content-end asideContentLeft-end]
        ${columnWidth}
        [splitRight-end asideRight-end wide-end full-end]
    }
  `
);

interface SideProps {
  side?: "left" | "right" | undefined;
}

export const Aside = styled.div<SideProps>(
  ({ theme, side }) => css`
    ${side && `grid-column: aside${capitalize(side)};`};

    ${theme.media.lessThan(theme.breakpoints.laptopLarge)} {
      display: none;
    }
  `
);

export const AsideContent = styled.div<SideProps>(
  ({ theme, side }) => css`
    ${side && `grid-column: asideContent${capitalize(side)}`};

    ${theme.media.lessThan(theme.breakpoints.laptopLarge)} {
      grid-column: content;
    }
  `
);

export const Split = styled.div<SideProps>(
  ({ theme, side }) => css`
    ${side && `grid-column: split${capitalize(side)}`};

    ${theme.media.lessThan(theme.breakpoints.laptopLarge)} {
      grid-column: content;
    }
  `
);

export const Centered = styled.div`
  ${content};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
