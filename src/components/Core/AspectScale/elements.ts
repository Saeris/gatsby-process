import styled, { css } from "styled-components";

const getRatio = (ratio: string | number): string => {
  switch (true) {
    case typeof ratio === `number`: {
      return String(ratio);
    }
    case /(\d*:\d*)/.test(ratio as string):
      return (ratio as string)
        .replace(`:`, `/`)
        .split(`/`)
        .reverse()
        .join(`/`);
    case /(\d*\/\d*)/.test(ratio as string):
      return (ratio as string)
        .split(`/`)
        .reverse()
        .join(`/`);
    default:
      return `1`;
  }
};

export const Grow = styled.div<{ ratio: string | number }>(
  ({ ratio = 50 }) => css`
    width: 100%;

    &:before {
      content: "";
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: calc((${getRatio(ratio)}) * 100%);
    }

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  `
);

export const Contain = styled.div<{ ratio: string | number }>(
  ({ ratio = 50 }) => css`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: calc((${getRatio(ratio)}) * 100%);
    overflow: hidden;
  `
);

export const Content = styled.div(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `
);
