import React, { useState } from "react"
import LandingPage from "./pages/LandingPage"
import GlobalStyle, { SmallText } from "./stylesheets/globalStyle"
// import AboutMe from "./pages/AboutMe"
import TestAbout from "./pages/TestAbout"
import NavBar from "./components/NavBar"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"
import ContactMe from "./pages/ContactMe"
import { TopSection } from "./stylesheets/landingpagestyle"
import { BodyContainer, Container } from "./stylesheets"
import VideoPlayer from "./components/VideoPlayer"

function App() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")
  console.log(videoSrc)
  return (
    <>
      {showVideo && (
        <VideoPlayer setShowVideo={setShowVideo} videoSrc={videoSrc} />
      )}
      <NavBar />
      <Container id="main-div">
        <BodyContainer>
          <GlobalStyle />
          <LandingPage />
          <TestAbout />
          {/* <AboutMe /> */}
          <Projects setShowVideo={setShowVideo} setVideoSrc={setVideoSrc} />
          <TechStack />
          <ContactMe />
        </BodyContainer>
        <TopSection>
          <SmallText>design and coding by Messele G.</SmallText>
        </TopSection>
      </Container>
    </>
  )
}

export default App
