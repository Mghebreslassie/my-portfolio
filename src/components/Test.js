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
import { OutlinedButtonText, SmallHeading } from "../stylesheets/globalStyle"

function Test({
  lrgImg,
  title,
  smlImg,
  type,
  desc,
  setShowVideo,
  video,
  code,
  setVideoSrc,
}) {
  return (
    <Container>
      <Image src={`${process.env.PUBLIC_URL}${lrgImg}`}></Image>
      <Title>{title}</Title>
      <BodyContainer>
        <Left>
          <MobilePic src={`${process.env.PUBLIC_URL}${smlImg}`} />
        </Left>
        <Right>
          <Type>{type}</Type>
          <Desc>{desc}</Desc>
          <Icons>
            <i className="devicon-express-original"></i>
            <i className="devicon-nodejs-plain"></i>
            <i className="devicon-react-plain"></i>
            <i className="devicon-javascript-plain"></i>
          </Icons>
          <Footer>
            {code.length > 0 && (
              <OutlinedButtonText>
                <a href={code} rel="noreferrer" target="_blank">
                  <SmallHeading>code</SmallHeading>
                </a>
              </OutlinedButtonText>
            )}
            {title === "Versa" && (
              <OutlinedButtonText>
                <SmallHeading>
                  <a
                    href="https://versa-staging.herokuapp.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    live
                  </a>
                </SmallHeading>
              </OutlinedButtonText>
            )}
            <OutlinedButtonText
              onClick={() => {
                setShowVideo(true)
                setVideoSrc(video)
              }}
            >
              <SmallHeading>view</SmallHeading>
            </OutlinedButtonText>
          </Footer>
        </Right>
      </BodyContainer>
    </Container>
  )
}

export default Test
