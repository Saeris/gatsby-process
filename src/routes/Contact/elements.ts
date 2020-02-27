// eslint-disable-next-line import/named
import styled, { css, DefaultTheme } from "styled-components";
import { Section, Form, Input, TextArea, Button } from "../../components/core";

export const Container = styled(Section)(({ theme }) => css`

`);

export const ContactForm = styled(Form)(({ theme }) => css`
	grid-column: asideContentLeft;
	display: grid;
	grid-template:
		"firstName lastName"
		"email email"
		"subject subject"
		"message message"
		"clear send";
	grid-column-gap: 2ch;
	margin-top: 5rem;
`);

export const NameInputs = (theme: DefaultTheme) => css``;

export const FirstName = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
	required: true,
  name: `firstName`,
  placeholder: `First Name`
})(({ theme }) => css`
	grid-area: firstName;
`);

export const LastName = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
	required: true,
  name: `lastName`,
  placeholder: `Last Name`
})(({ theme }) => css`
	grid-area: lastName;
`);

export const Email = styled(Input).attrs({
  type: `email`,
  "data-lpignore": true,
	required: true,
  name: `email`,
  placeholder: `Email Address`
})(({ theme }) => css`
	grid-area: email;
`);

export const Subject = styled(Input).attrs({
  type: `text`,
  "data-lpignore": true,
	required: true,
  name: `subject`,
  placeholder: `Subject`
})(({ theme }) => css`
	grid-area: subject;
`);

export const Message = styled(TextArea).attrs({
  rows: 3,
	required: true,
  name: `message`,
  placeholder: `Message`
})(
  ({ theme }) => css`
		grid-area: message;
    resize: vertical;
  `
);

export const Clear = styled(Button).attrs({
	secondary: true
})(({ theme }) => css`
grid-area: clear;
`);

export const Send = styled(Button)(({ theme }) => css`
	grid-area: send;
`);
