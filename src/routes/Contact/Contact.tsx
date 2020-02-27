import React from "react";
import { Layout } from "../../components";
import { Container, ContactForm, FirstName, LastName, Email, Subject, Message, Send, Clear } from "./elements";

export const Contact: React.FC = () => (
  <Layout>
    <Container>
      <ContactForm>
        <FirstName />
        <LastName />
        <Email />
        <Subject />
        <Message />
				<Clear>Clear</Clear>
				<Send>Send</Send>
      </ContactForm>
    </Container>
  </Layout>
);
