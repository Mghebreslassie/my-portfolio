import React, { useRef } from "react"
import emailjs from "emailjs-com"
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
  SectionTitle,
  SectionWord,
  MediumHeading,
  MediumText,
} from "../stylesheets/globalStyle"
function ContactMe() {
  console.log(emailjs)
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
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
        <FormMain ref={form} onSubmit={sendEmail}>
          <Input placeholder="name" name="name" />
          <Input placeholder="email" email="email" />
          <TextArea placeholder="message" name="message" />
          <ButtonContainer>
            <OutlinedButtonText type="submit">
              <SmallText>submit</SmallText>
            </OutlinedButtonText>
          </ButtonContainer>
        </FormMain>
      </ContactContainer>
    </div>
  )
}

export default ContactMe
