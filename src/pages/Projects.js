import React from "react"
import Project from "../components/Project"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import versa from "../assets/versa.png"
import todo from "../assets/coril.png"
import coril from "../assets/todo.png"
import A from "../assets/descriptions.json"
import { ProjectContainer } from "../stylesheets/projects"
import v from "../assets/versaMobile.png"
import v2 from "../assets/versaMonitor.png"
import v3 from "../assets/versaBoth.png"
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
