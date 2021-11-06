import React from "react"
import { Container } from "../stylesheets/footerstyle"
import { SocialRow, SocialIcon } from "../stylesheets/footerstyle"

function Footer() {
  return (
    <Container>
      <SocialRow>
        <SocialIcon>
          <i className="devicon-facebook-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i className="devicon-twitter-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i className="devicon-github-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i className="devicon-linkedin-plain"></i>
        </SocialIcon>
      </SocialRow>
    </Container>
  )
}

export default Footer
