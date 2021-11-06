import styled from "styled-components"
import { NavContainer } from "./navbarstyle"
import { TechIconRow, TechIcon } from "./techstack"

export const Container = styled(NavContainer)``
export const SocialRow = styled(TechIconRow)``
export const SocialIcon = styled(TechIcon)`
  box-shadow: none;
  :hover {
    background: black;
    color: white;
  }
`
