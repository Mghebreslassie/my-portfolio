import React from "react"
import { ActionButton, Content, Intro } from "../stylesheets/landingpagestyle"
import {
  MainHeading,
  MediumHeading,
  OutlinedButtonText,
  SmallArticle,
  SmallText,
} from "../stylesheets/globalStyle"

function LandingPage() {
  return (
    <div>
      <Content>
        <Intro>
          <MediumHeading>hi I'm</MediumHeading>
        </Intro>
        <MainHeading>MESSELE GHEBRESLASSIE</MainHeading>
        <SmallArticle>
          I'm a full stack developer from Calgary, Alberta. I have a bit of a
          knack for building web apps, and insatiable hungry to improve my
          skills. Feel free to leave a message in the contact form, and I'll do
          my best to get back to you asap. Thanks!
        </SmallArticle>
        <ActionButton>
          <OutlinedButtonText>
            <SmallText>
              <a href="#contact">Contact me!</a>
            </SmallText>
          </OutlinedButtonText>
        </ActionButton>
      </Content>
    </div>
  )
}

export default LandingPage
