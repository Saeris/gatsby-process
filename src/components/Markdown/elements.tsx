import React from "react";
import styled, { css } from "styled-components";
import { Code } from "./Code";
import { Link } from "../Link";
import { tracking } from "../../utils";

export const P = styled.p(
  ({ theme }) => css`
    line-height: 150%;
    margin-block-start: calc(0.75em / 2);
    margin-block-end: calc(0.75em / 2);
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `
);

export const H1 = styled.h1(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.title} * 0.5) / 2) 0;
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.weights.extrabold};
    letter-spacing: ${tracking(80)};
    text-transform: uppercase;
  `
);

export const H2 = styled.h2(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.title} * 1.25) / 2) 0;
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.weights.regular};
    font-style: italic;
    letter-spacing: ${tracking(80)};
    text-transform: uppercase;
  `
);

export const H3 = styled.h3(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.subtitle} * 1.5) / 2) 0;
    font-size: ${theme.fontSizes.subtitle};
    font-weight: ${theme.weights.bold};
    letter-spacing: ${tracking(40)};
    text-transform: uppercase;
  `
);

export const H4 = styled.h4(
  ({ theme }) => css`
    margin: calc(${theme.fontSizes.headline} / 2) 0;
    font-size: ${theme.fontSizes.headline};
    color: ${theme.colors.secondary.normal};
    font-weight: ${theme.weights.regular};
    text-transform: uppercase;
  `
);

export const H5 = styled.h5(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.form} * 0.75) / 2) 0;
    font-size: ${theme.fontSizes.form};
    font-style: italic;
  `
);

export const H6 = styled.h6(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.body} * 1.5) / 2) 0;
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.grays[800]};
    font-style: italic;
    font-weight: ${theme.weights.medium};
    text-transform: uppercase;
  `
);

export const HR = styled.hr(
  ({ theme }) => css`
    width: 95%;
    margin: 3rem auto;
    border: 0;
    border-bottom: 1px solid ${theme.colors.grays[500]};
  `
);

export const Blockquote = styled.blockquote(
  ({ theme }) => css`
    max-width: 40ch;
    padding-left: 3rem;
    margin: 4.5rem 0;
    border-left: 5px solid ${theme.colors.secondary.normal};
    font-size: ${theme.fontSizes.form};
    font-style: italic;
    line-height: 1.5;

    cite {
      display: block;
      color: ${theme.colors.grays[800]};
      font-size: ${theme.fontSizes.tiny};
      font-style: normal;
      text-transform: uppercase;
    }
  `
);

export const UL = styled.ul(({ theme }) => css``);

export const OL = styled.ol(({ theme }) => css``);

export const LI = styled.li(({ theme }) => css``);

export const Table = styled.table(({ theme }) => css``);

export const Row = styled.tr(({ theme }) => css``);

export const Cell = styled.td(({ theme }) => css``);

export const TableHeader = styled.th(({ theme }) => css``);

export const Pre = styled.pre(
  ({ theme }) => css`
    position: relative;
    display: block;
    width: 95%;
    padding: 3rem 0;
    margin: 4rem auto;
    border-radius: 1rem;
    background-color: ${theme.colors.grays[200]};
    font-family: ${theme.fonts.code};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
  `
);

export const EM = styled.em(({ theme }) => css``);

export const Strong = styled.strong(
  ({ theme }) => css`
    font-weight: ${theme.weights.bold};
  `
);

export const Delete = styled.del(({ theme }) => css``);

export const InlineCode = styled.code(
  ({ theme }) => css`
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    background-color: ${theme.colors.grays[200]};
    color: ${theme.colors.secondary.normal};
    font-family: "Fira Code", monospace;
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.weights.light};
  `
);

export const Figure = styled.figure(
  ({ theme }) => css`
    margin: calc((${theme.fontSizes.tiny} * 1.5) / 2) 0;
  `
);

export const Caption = styled.figcaption(
  ({ theme }) => css`
    max-width: 40ch;
    margin: 0 auto;
    margin-top: calc(${theme.fontSizes.tiny} * 1.25);
    color: ${theme.colors.grays[800]};
    font-size: ${theme.fontSizes.tiny};
    font-weight: ${theme.weights.light};
    font-style: italic;
    text-align: center;
  `
);

const PreOrCode = (preProps: any) => {
  const preToCodeBlock = () => {
    if (preProps?.children?.props?.mdxType === `code`) {
      const { children: code, className = ``, ...props } = preProps.children.props;

      const matches = className.match(/language-(?<lang>.*)/);

      return {
        code: code.trim(),
        className,
        language: matches?.groups?.lang || ``,
        ...props
      };
    }
  };

  const props = preToCodeBlock();
  if (props) {
    return <Code {...props} />;
  }
  return <pre {...preProps} />;
};

export const markdownComponents = {
  p: P,
  h1: H1, // #
  h2: H2, // ##
  h3: H3, // ###
  h4: H4, // ####
  h5: H5, // #####
  h6: H6, // ######
  thematicBreak: HR, // ***
  blockquote: Blockquote, // >
  ul: UL, // -
  ol: OL, // 1.
  li: LI,
  table: Table, // `---
  tr: Row, // `This
  td: Cell,
  th: TableHeader,
  pre: PreOrCode,
  code: PreOrCode,
  em: EM, // _emphasis_
  strong: Strong, // **strong**
  delete: Delete, // ~~strikethrough~~
  inlineCode: InlineCode,
  hr: HR, // ---
  a: Link, // [MDX](https://mdxjs.com)
  figure: Figure,
  figcaption: Caption
};
