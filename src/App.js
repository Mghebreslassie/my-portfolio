import LandingPage from "./pages/LandingPage"
import GlobalStyle, { SmallText } from "./stylesheets/globalStyle"
import AboutMe from "./pages/AboutMe"
import NavBar from "./components/NavBar"
import Projects from "./pages/Projects"
import TechStack from "./pages/TechStack"
import ContactMe from "./pages/ContactMe"
import Footer from "./components/Footer"
import Socials from "./components/Socials"
import { TopSection } from "./stylesheets/landingpagestyle"
import { BodyContainer, Container } from "./stylesheets"
function App() {
  return (
    <>
      <NavBar />
      <Container id="main-div">
        {/* <Socials /> */}
        <BodyContainer>
          <GlobalStyle />
          <LandingPage />
          <AboutMe />
          <Projects />
          <TechStack />
          <ContactMe />
        </BodyContainer>
        <TopSection>
          <SmallText>design and coding by Messele G.</SmallText>
        </TopSection>
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default App
