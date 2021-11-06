import React from "react"
import {
  BodyContainer,
  Container,
  Footer,
  Icons,
  Image,
  Title,
  Desc,
  Type,
  Left,
  Right,
  MobilePic,
} from "../stylesheets/teststyle"
import versa from "../assets/versaMonitor.png"
import versaMobile from "../assets/versaMobile.png"
import {
  OutlinedButtonText,
  SmallHeading,
  SmallText,
} from "../stylesheets/globalStyle"

function Test() {
  return (
    <Container>
      <Image src={versa}></Image>
      <Title>versa</Title>
      <BodyContainer>
        <Left>
          <MobilePic src={versaMobile} />
        </Left>
        <Right>
          <Type>ecommerce web app</Type>
          <Desc>
            a web app built with react and express. Meant to give local artists
            a platform to sell goods. fully functional crud app.
          </Desc>
          <Icons>
            <i class="devicon-docker-plain"></i>
            <i class="devicon-azure-plain"></i>
            <i class="devicon-react-plain"></i>
            <i class="devicon-javascript-plain"></i>
          </Icons>
          <Footer>
            <OutlinedButtonText>
              <SmallHeading>code</SmallHeading>
            </OutlinedButtonText>
            <OutlinedButtonText>
              <SmallHeading>view</SmallHeading>
            </OutlinedButtonText>
          </Footer>
        </Right>
      </BodyContainer>
    </Container>
  )
}

export default Test
