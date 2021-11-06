import React from "react"
import {
  AboutContainer,
  ImageContainer,
  AboutArticle,
} from "../stylesheets/aboutme"
import {
  MediumText,
  MediumArticle,
  MediumHeading,
  SmallArticle,
  SmallText,
} from "../stylesheets/globalStyle"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import barrack from "../assets/barrack.jpg"
import peter from "../assets/peter.jpg"
function AboutMe() {
  return (
    <AboutContainer id="about">
      <AboutArticle>
        <SectionTitle>
          <SectionWord>about</SectionWord>
          <SectionWord>me</SectionWord>
        </SectionTitle>
        <div style={{ margin: "10% 0", padding: "0 5%" }}>
          <SmallArticle>
            A fullstack developer with a passion for tinkering and finding new
            and exciting ways to connect with people digitally
          </SmallArticle>
        </div>
        <ImageContainer src={peter} alt="barrack"></ImageContainer>

        <div style={{ margin: "10% 0", padding: "0 10%" }}>
          <SmallText>
            I’ve been a lifelong learner and fan of technology for as long as I
            can remember. I remember exploring and playing around with family pc
            growing up and my own devices later. I took an active interest in
            programming in the last two years through self study and completing
            a 6 bootcamp just recently. I like to bring creativity that’s
            blended with modernity and established themes to any project I work
            on. I believe that teamwork and synergy lead to more incredible
            accomplishments than solo endeavours. I truly believe that through
            hard work and discipline you can learn to do amazing things. My name
            is Messele and I’m a full stack web developer.
          </SmallText>
        </div>
      </AboutArticle>
    </AboutContainer>
  )
}

export default AboutMe
