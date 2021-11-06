import styled from "styled-components"
import { device } from "./device"
import abstract from "../assets/shapes.svg"

export const Container = styled.div`
  @media ${device.mobileS} {
    background-image: url(${abstract});
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  @media ${device.laptopL} {
    position: relative;
  }
`
export const BodyContainer = styled.div`
  @media ${device.mobileS} {
    width: 100vw;
    background: white;
    margin-bottom: 5%;
    border-radius: 20px;
    overflow: hidden:
  }
  @media ${device.laptopL} {
    width: 60vw;
    margin: 0 auto;
    margin-bottom: 5%;
    background: aliceblue;
  }
`
