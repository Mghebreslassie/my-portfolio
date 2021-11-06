import React from "react"
import {
  Container,
  Top,
  Bottom,
  LeftSide,
  RightSide,
  ItemTitle,
  ItemDesc,
  ItemSummary,
  TechIconList,
  ImageContainer,
  ViewButtonContainer,
  LargeItemText,
  MediumItemText,
  SmallItemText,
} from "../stylesheets/projects"
import {
  PillButtonStyle,
  SmallArticle,
  SmallHeading,
  SmallText,
} from "../stylesheets/globalStyle"

function Project({ image, desc }) {
  return (
    <Container>
      <Top>
        <LeftSide>
          <ImageContainer src={image} alt="versa" />
        </LeftSide>
        <RightSide>
          <ItemTitle>
            <LargeItemText>versa</LargeItemText>
          </ItemTitle>
          <ItemDesc>
            <MediumItemText>web app</MediumItemText>
          </ItemDesc>
          <ItemSummary>
            <SmallItemText>{desc}</SmallItemText>
          </ItemSummary>
          <TechIconList>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-nodejs-plain"></i>
          </TechIconList>
        </RightSide>
      </Top>
      <Bottom>
        <ViewButtonContainer>
          <PillButtonStyle>
            <SmallHeading>view code</SmallHeading>
          </PillButtonStyle>
        </ViewButtonContainer>
        <ViewButtonContainer>
          <PillButtonStyle>
            <SmallHeading>view live</SmallHeading>
          </PillButtonStyle>
        </ViewButtonContainer>
      </Bottom>
    </Container>
  )
}

export default Project
