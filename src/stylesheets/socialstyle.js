import styled from "styled-components"

export const SocialContainer = styled.div`
  width: 5vh;
  height: 25vh;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 3%;
  z-index: 1;
`
export const SocialIcon = styled.div`
  width: 100%;
  height: 25%;
  margin: 3px 0;
  border-radius: 5px;
  box-shadow: inset 2px 2px 0.25rem grey;
  justify-content: center;
  align-items: center;
  display: flex;
  background: white;
`
export const SvgContainer = styled.svg`
  padding: 10%;
  height: 70%;
`
