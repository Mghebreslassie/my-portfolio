import React from "react"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import A from "../assets/descriptions.json"
import { ProjectContainer } from "../stylesheets/projects"
import Test from "../components/Test"

function Projects() {
  console.log(A)
  return (
    <ProjectContainer id="projects">
      <SectionTitle>
        <SectionWord>my</SectionWord>
        <SectionWord>projects</SectionWord>
      </SectionTitle>
      <Test />
      <Test />
      <Test />
      {/* <Project image={v} desc={A.items[0].desc} />
      <Project image={v2} desc={A.items[0].desc} />
      <Project image={v3} desc={A.items[0].desc} /> */}
    </ProjectContainer>
  )
}

export default Projects
