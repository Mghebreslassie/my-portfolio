import React from "react"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import {
  Footer,
  TechContainer,
  TechIconRow,
  TechIconContainer,
  Title,
  TechIcon,
} from "../stylesheets/techstack"

function TechStack() {
  return (
    <TechContainer id="techstack">
      <SectionTitle>
        <SectionWord>The</SectionWord>
        <SectionWord>toolbox</SectionWord>
      </SectionTitle>
      <TechIconContainer>
        <TechIconRow>
          <TechIcon>
            <i class="devicon-azure-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-nodejs-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-html5-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-express-original-wordmark"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-react-original"></i>
          </TechIcon>
        </TechIconRow>
        <TechIconRow>
          <TechIcon>
            <i class="devicon-javascript-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-postgresql-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-python-plain"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-github-original"></i>
          </TechIcon>
          <TechIcon>
            <i class="devicon-docker-plain"></i>
          </TechIcon>
        </TechIconRow>
      </TechIconContainer>
    </TechContainer>
  )
}

export default TechStack
