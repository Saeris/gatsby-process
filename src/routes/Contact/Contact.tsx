import React from "react";
import { Layout, H4, Paragraph, Split } from "../../components";
import { Container, Content, ContactForm, FirstName, LastName, Email, Subject, Message, Send, Clear } from "./elements";

export const Contact: React.FC = () => (
  <Layout>
    <Container>
        <Content>
          <H4>Let’s talk</H4>
          <Paragraph>
            If you’re interested in speaking more about my work and experience, come say hello! I’d love to hear from
            you.
          </Paragraph>
        </Content>
      <Split side="right">
        <ContactForm>
          <FirstName />
          <LastName />
          <Email />
          <Subject />
          <Message />
          <Clear>Clear</Clear>
          <Send>Send</Send>
        </ContactForm>
      </Split>
    </Container>
  </Layout>
);
