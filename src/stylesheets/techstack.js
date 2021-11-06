import styled from "styled-components"
import { device } from "./device"
import { animateA, animateB, animateC } from "./globalStyle"

export const TechContainer = styled.div``
export const Title = styled.h1`
  font-size: 6rem;
  font-family: var(--font-heading);
  font-weight: 400;
`
export const TechIconContainer = styled.div`
  padding: 10% 0;
`
export const TechIconRow = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-around;
  height: 12vh;
  align-items: center;
`
export const TechIcon = styled.div`
  @media ${device.mobileS} {
    font-size: 40px;
    box-shadow: 1px 1px 0.25rem grey;
    border-radius: 5px;
    :hover {
      background: linear-gradient(63deg, #2cf0b5, #fb583d, #f3e51b);
      background-size: 600% 600%;
      color: var(--color-tertiary);
      -webkit-animation: ${animateA} 2s ease infinite;
      -moz-animation: ${animateB} 2s ease infinite;
      animation: ${animateC} 2s ease infinite;
    }
  }
  @media ${device.laptop} {
    font-size: 100px;
  }
`
export const Footer = styled.h4`
  font-size: 2rem;
  font-family: urbanist;
  font-weight: 400;
`
