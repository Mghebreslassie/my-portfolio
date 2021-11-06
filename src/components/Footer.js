import React from "react"
import { Container } from "../stylesheets/footerstyle"
import { SocialRow, SocialIcon } from "../stylesheets/footerstyle"

function Footer() {
  return (
    <Container>
      <SocialRow>
        <SocialIcon>
          <i class="devicon-facebook-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i class="devicon-twitter-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i class="devicon-github-plain"></i>
        </SocialIcon>
        <SocialIcon>
          <i class="devicon-linkedin-plain"></i>
        </SocialIcon>
      </SocialRow>
    </Container>
  )
}

export default Footer
