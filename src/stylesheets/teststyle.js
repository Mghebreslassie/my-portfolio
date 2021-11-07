import styled from "styled-components"
import { device } from "./device"
import { shakeAround } from "./globalStyle"

export const Container = styled.div`
  @media ${device.mobileS} {
    width: 90%;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    background: aliceblue;
    border-radius: 2% 2% 0 0;
  }
  @media ${device.laptopL} {
    background: aliceblue;
  }
`
export const Image = styled.img`
  width: 80%;
  padding: 10%;
`
export const BodyContainer = styled.div`
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.laptopL} {
    display: flex;
    justify-content: space-between;
  }
`
export const Left = styled.div`
  @media ${device.mobileS} {
    width: 0;
    height: 0;
    display: none;
  }
  @media ${device.laptopL} {
    display: block;
    height: auto;
    width: 100%;
  }
`
export const MobilePic = styled.img`
  height: 80%;
  padding: 10%;
  object-fit: contain;
`
export const Right = styled.div`
  @media ${device.laptopL} {
    width: 100%;
  }
`

export const Title = styled.h2`
  @media ${device.mobileS} {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5rem;
    padding: 5%;
    color: var(--color-tertiary);
    background-color: var(--color-accent-primary);
  }
  @media ${device.laptop} {
    font-size: 4rem;
  }
  @media ${device.laptopL} {
    font-size: 6rem;
    padding: 3%;
  }
`
export const Type = styled.h4`
  @media ${device.mobileS} {
    text-align: center;
    font-family: "Inter";
    padding: 3% 0;
    color: var(--color-accent-primary);
  }
  @media ${device.laptop} {
    font-size: 2.5rem;
  }
  @media ${device.laptopL} {
    font-size: 4rem;
  }
`
export const Desc = styled.p`
  @media ${device.mobileS} {
    font-size: 1rem;
    font-family: var(--font-heading);
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 2rem;
  }
  @media ${device.laptopL} {
    font-size: 2.5rem;
  }
`
export const Icons = styled.div`
  @media ${device.mobileS} {
    padding: 5% 0;
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    font-size: 30px;
    & > i:hover {
      transition: all 0.3s ease;
      color: var(--color-accent-primary);
      animation: ${shakeAround} 1s ease-out infinite;
    }
  }
  @media ${device.laptop} {
    font-size: 4rem;
  }
  @media ${device.laptopL} {
    font-size: 6rem;
  }
`
export const Footer = styled.div`
  border-bottom: 4px solid var(--color-accent-primary);
  padding: 2% 0;
  display: flex;
  justify-content: space-around;
  @media ${device.laptopL} {
    border: none;
  }
`
