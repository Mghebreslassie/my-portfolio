import React from "react"
import { SectionTitle, SectionWord } from "../stylesheets/globalStyle"
import { ProjectContainer } from "../stylesheets/projects"
import Test from "../components/Test"
import projectInfo from "../assets/descriptions.json"

function Projects({ setVideoSrc, setShowVideo }) {
  return (
    <ProjectContainer id="projects">
      <SectionTitle>
        <SectionWord>my</SectionWord>
        <SectionWord>projects</SectionWord>
      </SectionTitle>
      {projectInfo.items.map((item, index) => {
        return (
          <Test
            key={index}
            title={item.title}
            type={item.type}
            desc={item.desc}
            smlImg={item.smlImg}
            lrgImg={item.lrgImg}
            video={item.video}
            code={item.code}
            setShowVideo={setShowVideo}
            setVideoSrc={setVideoSrc}
          />
        )
      })}
      {/* <Test /> */}
      {/* <Test /> */}
    </ProjectContainer>
  )
}

export default Projects
