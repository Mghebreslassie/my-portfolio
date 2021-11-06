import React from "react"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import {
  TechContainer,
  TechIconRow,
  TechIconContainer,
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
            <i className="devicon-azure-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-nodejs-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-html5-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-express-original-wordmark"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-react-original"></i>
          </TechIcon>
        </TechIconRow>
        <TechIconRow>
          <TechIcon>
            <i className="devicon-javascript-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-postgresql-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-python-plain"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-github-original"></i>
          </TechIcon>
          <TechIcon>
            <i className="devicon-docker-plain"></i>
          </TechIcon>
        </TechIconRow>
      </TechIconContainer>
    </TechContainer>
  )
}

export default TechStack
