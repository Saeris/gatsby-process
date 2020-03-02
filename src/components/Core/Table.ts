import styled, { css } from "styled-components";
import { content } from "./Container";

export const Table = styled.table(
  () => css`
    ${content};
  `
);

export const Row = styled.tr(() => css``);

export const Cell = styled.td(() => css``);

export const TableHeader = styled.th(() => css``);
