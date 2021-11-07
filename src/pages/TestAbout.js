import React from "react"
import {
  MediumHeading,
  SmallText,
  SectionTitle,
  SectionWord,
} from "../stylesheets/globalStyle"
import {
  Container,
  LeftContainer,
  RightContainer,
  ImageContainer,
  Top,
  Bottom,
  Content,
  Footer,
} from "../stylesheets/testabout"
import messele from "../assets/messele.jpg"

function TestAbout() {
  return (
    <Container id="aboutme">
      <Top>
        <SectionTitle>
          <SectionWord>about</SectionWord>
          <SectionWord>me</SectionWord>
        </SectionTitle>
      </Top>
      <Bottom>
        <Content>
          <LeftContainer>
            <div style={{ margin: "5% 0" }}>
              <SmallText>a little bit about...</SmallText>
            </div>
            <div style={{ margin: "5% 0" }}>
              <MediumHeading>Messele Ghebreslassie</MediumHeading>
            </div>
            <div style={{ margin: "5% 0" }}>
              <SmallText>full stack | web developer</SmallText>
            </div>
            <div style={{ margin: "10% 0" }}>
              <SmallText>
                I’m interested in programming and video games, I like books and
                musical instruments too. I’m currently learning react native.
                I’m looking to collaborate on an open source project. Best way
                to reach me is with morse code or smoke signals.
              </SmallText>
            </div>
          </LeftContainer>
          <RightContainer>
            <ImageContainer src={messele} />
          </RightContainer>
        </Content>
        <Footer>
          {/* <div style={{ borderBottom: "3px solid lightgrey", width: "50%" }} />
          <SmallText>reach me at</SmallText>
          <div>
            <i className="devicon-github-original" />
            <i className="devicon-github-original" />
            <i className="devicon-github-original" />
            <i className="devicon-github-original" />
          </div> */}
        </Footer>
      </Bottom>
    </Container>
  )
}

export default TestAbout
