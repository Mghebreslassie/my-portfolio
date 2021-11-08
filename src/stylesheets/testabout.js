import styled from "styled-components"
import { device } from "./device"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`
export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media ${device.mobileS} {
    justify-content: center;
  }
  align-items: center;
`
export const ImageContainer = styled.img`
  width: 90%;

  max-height: 60vh;
  object-fit: cover;
`
export const Top = styled.div`
  height: fit-content;
`
export const Bottom = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
`
export const Footer = styled.div`
  height: 10vh;
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > div > i {
    font-size: 2rem;
  }
`
