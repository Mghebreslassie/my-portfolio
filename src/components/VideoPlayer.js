import React from "react"
import {
  OverlayContainer,
  Video,
  VideoContainer,
  Header,
  Footer,
  Content,
} from "../stylesheets/videoplayerstyle"
import { SmallText, MediumText } from "../stylesheets/globalStyle"

function VideoPlayer({ setShowVideo, videoSrc }) {
  return (
    <OverlayContainer
      id="overlay-container"
      onClick={(e) => {
        if (e.target.id === "overlay-container") {
          setShowVideo(false)
        } else {
          setShowVideo(true)
        }
      }}
    >
      <Content>
        <Header>
          <MediumText>demonstration</MediumText>
        </Header>
        <VideoContainer id="vid-container">
          <Video autoPlay muted controls>
            <source
              src={`${process.env.PUBLIC_URL}${videoSrc}`}
              type="video/mp4"
            />
          </Video>
        </VideoContainer>
        <Footer>
          <SmallText>*click outer area to close</SmallText>
        </Footer>
      </Content>
    </OverlayContainer>
  )
}

export default VideoPlayer
