import styled, { css } from "styled-components";
import { content } from "./Container";

export const Table = styled.table(
  ({ theme }) => css`
    ${content};
  `
);

export const Row = styled.tr(({ theme }) => css``);

export const Cell = styled.td(({ theme }) => css``);

export const TableHeader = styled.th(({ theme }) => css``);
