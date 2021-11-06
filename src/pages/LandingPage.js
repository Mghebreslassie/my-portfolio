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
          <MediumHeading>hello from...</MediumHeading>
        </Intro>
        <MainHeading>MESSELE GHEBRESLASSIE</MainHeading>
        <SmallArticle>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </SmallArticle>
        <ActionButton>
          <OutlinedButtonText>
            <SmallText>Click to go below!</SmallText>
          </OutlinedButtonText>
        </ActionButton>
      </Content>
    </div>
  )
}

export default LandingPage
