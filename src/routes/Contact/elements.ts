// eslint-disable-next-line import/named
import styled, { css } from "styled-components";
import { Section, Split, Form, Input, TextArea, Reset, Submit } from "../../components";

export const Container = styled(Section)(() => css``);

export const Content = styled(Split).attrs({
  side: `left`
})(
  ({ theme }) => css`
    align-self: flex-start;
    padding-right: 2ch;

    ${theme.media.lessThan(theme.breakpoints.laptopLarge)} {
      padding: 0;
    }
  `
);

export const ContactForm = styled(Form)(
  ({ theme }) => css`
    align-self: flex-start;
    display: grid;
    grid-template:
      "firstName lastName"
      "email email"
      "subject subject"
      "message message"
      "clear send";
    grid-auto-columns: minMax(0, 24ch);
    grid-column-gap: 2ch;
    margin-top: calc(${theme.fontSizes.headline} / 2);
  `
);

export const FirstName = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
  required: true,
  name: `firstName`,
  placeholder: `First Name`
})(
  () => css`
    grid-area: firstName;
  `
);

export const LastName = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
  required: true,
  name: `lastName`,
  placeholder: `Last Name`
})(
  () => css`
    grid-area: lastName;
  `
);

export const Email = styled(Input).attrs({
  type: `email`,
  "data-lpignore": true,
  required: true,
  name: `email`,
  placeholder: `Email Address`
})(
  () => css`
    grid-area: email;
  `
);

export const Subject = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
  required: true,
  name: `subject`,
  placeholder: `Subject`
})(
  () => css`
    grid-area: subject;
  `
);

export const Message = styled(TextArea).attrs({
  rowsMin: 3,
  required: true,
  name: `message`,
  placeholder: `Message`
})(
  () => css`
    grid-area: message;
    resize: vertical;
  `
);

export const Clear = styled(Reset).attrs({
  secondary: true
})(
  () => css`
    grid-area: clear;
  `
);

export const Send = styled(Submit)(
  () => css`
    grid-area: send;
  `
);
