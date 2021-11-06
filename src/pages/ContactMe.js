import React from "react"
import {
  ContactContainer,
  Header,
  Message,
  FormMain,
  ButtonContainer,
  Input,
  TextArea,
} from "../stylesheets/contactmestyle"
import {
  OutlinedButtonText,
  SmallText,
  LargeText,
  SectionTitle,
  SectionWord,
  LargeHeading,
  MediumHeading,
  MediumText,
} from "../stylesheets/globalStyle"
function ContactMe() {
  return (
    <div id="contact">
      <SectionTitle>
        <SectionWord>contact</SectionWord>
        <SectionWord>me</SectionWord>
      </SectionTitle>
      <ContactContainer>
        <Header>
          <MediumHeading>let's get in touch!</MediumHeading>
        </Header>
        <Message>
          <MediumText>
            Dropping a line to say g’day, ask for my resume or see if we can
            build something amazing together? I’d love to hear from you! Fill in
            your info in the form below and I look forward to hearing from you!
          </MediumText>
        </Message>
        <FormMain>
          <Input placeholder="name" />
          <Input placeholder="email" />
          <TextArea placeholder="message" />
        </FormMain>
        <ButtonContainer>
          <OutlinedButtonText>
            <SmallText>submit</SmallText>
          </OutlinedButtonText>
        </ButtonContainer>
      </ContactContainer>
    </div>
  )
}

export default ContactMe
