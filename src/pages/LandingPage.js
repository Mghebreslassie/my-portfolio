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
          I'm a full stack developer from Calgary, Alberta. I love to program
          and build things with software. I loved to be challenged and learn new
          things as well. Feel free to leave a message in the contact form, and
          I'll do my best to get back to you asap. Thanks!
        </SmallArticle>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ActionButton>
            <OutlinedButtonText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <i
                  style={{ paddingRight: "10px", fontSize: "2rem" }}
                  className="devicon-github-original"
                ></i>
                <SmallText>
                  <a href="https://github.com/Mghebreslassie">Github</a>
                </SmallText>
              </div>
            </OutlinedButtonText>
          </ActionButton>
          <ActionButton>
            <OutlinedButtonText>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <i
                  style={{ paddingRight: "10px", fontSize: "2rem" }}
                  className="devicon-linkedin-plain"
                ></i>
                <SmallText>
                  <a href="https://www.linkedin.com/in/messele-ghebreslassie">
                    Linkedin
                  </a>
                </SmallText>
              </div>
            </OutlinedButtonText>
          </ActionButton>
        </div>
      </Content>
    </div>
  )
}

export default LandingPage
