import styled from "styled-components"
import { device } from "./device"

export const OverlayContainer = styled.div`
  display: visible; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 11; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 12;
  background-color: #fefefe;
  position: absolute;
  top: 12%;
  left: 7%;
  width: 80%;
  border-radius: 4%;
`
export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Video = styled.video`
  @media ${device.mobileS} {
    width: 100%;
    height: 50vh;
  }
  @media ${device.laptop} {
    width: 75%;
    height: auto;
  }
`
export const Header = styled.div`
  background: var(--color-primary);
  text-align: center;
`
export const Footer = styled.div`
  background: var(--color-primary);
  text-align: center;
`
