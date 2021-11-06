import styled, { createGlobalStyle, keyframes } from "styled-components"
import { device } from "./device"
export const colorFlicker = keyframes`
  0%
  {
    width: 0;
  }
  100%
  {
    width: 100%;
  }
 
`
export const stretch = keyframes`
  0%{
    width: 0;
  } 100% {
    width: 100%;
  }
`

export const dropDown = keyframes`
  0%{
    transform: translateY(-100%);
  } 100% {
    transform: translateY(0);
  }
`

export const dropUp = keyframes`
  0% {
    transform: translateY(0);
  } 100% {
    transform: translateY(-100%);
  }
`
export const shakeAround = keyframes`
  0% {
    transform: rotate(0);
  } 20% {
    transform: rotate(-30deg);
  } 85% {
    transform: rotate(30deg);
  } 100% {
    transform: rotate(0);
  }
`
export const animateA = keyframes`{
  0%{background-position:0% 64%}
  50%{background-position:100% 37%}
  100%{background-position:0% 64%}
}`
export const animateB = keyframes`{
  0%{background-position:0% 64%}
  50%{background-position:100% 37%}
  100%{background-position:0% 64%}
}`
export const animateC = keyframes`{
  0%{background-position:0% 64%}
  50%{background-position:100% 37%}
  100%{background-position:0% 64%}
}`

const GlobalStyle = createGlobalStyle`
    html {
        padding: 0;
        margin: 0;
        @media ${device.mobileS} {
          --text-size-small: 1rem;
          --text-size-medium: 1.2rem;
          --text-size-large: 1.4rem;
          --article-size-small: 1.2rem;
          --article-size-medium: 1.4rem;
          --article-size-large: 1.6rem;
          --heading-size-small: 1.4rem;
          --heading-size-medium: 1.6rem;
          --heading-size-large: 2.1rem;
          --main-size-large: 2rem;
        }
        
      @media ${device.laptop} {
        --text-size-small: 1.8rem;
          --text-size-medium: 2.0rem;
          --text-size-large: 2.1rem;
          --article-size-small: 2.0rem;
          --article-size-medium: 2.1rem;
          --article-size-large: 2.4rem;
          --heading-size-small: 2.3rem;
          --heading-size-medium: 2.9rem;
          --heading-size-large: 3.2rem;
          --main-size-large: 5.8rem;
      }

      @media ${device.laptopL} {
        --text-size-small: 2.2rem;
        --text-size-medium: 2.4rem;
        --text-size-large: 2.6rem;
        --article-size-small: 2.5rem;
        --article-size-medium: 2.7rem;
        --article-size-large: 2.9rem;
        --heading-size-small: 3.5rem;
        --heading-size-medium: 5rem;
        --heading-size-large: 7rem;
        --main-size-large: 10rem;
      }
      --font-main: urbanist;
          --font-accent: Inter;
          --font-article: Poppins;
          --font-heading: Manrope;
      --color-primary: #ff5e5b;
          --color-secondary: #D8D8D8;
          --color-tertiary: #ffffea;
          --color-accent-primary: #00cecb;
          --color-accent-secondary: #ffed66;
        @media ${device.mobileS} {

          textarea, input { 
            outline: none; 
            border: none;
            ::placeholder {
              font-size: 1rem;
              font-family: urbanist;
            }
          }
        }
        @media ${device.laptop} {
          textarea, input { 
            ::placeholder {
              font-size: 2.3rem;
            }
          }
        }
    }
    a {
      color: inherit; 
      text-decoration: inherit; 
    }
`
export const SmallText = styled.p`
  @media ${device.mobileS} {
    font-size: var(--text-size-small);
    font-family: var(--font-article);
    font-weight: 300;
    z-index: 1;
  }
`
export const SmallArticle = styled.p`
  @media ${device.mobileS} {
    font-size: var(--article-size-small);
    font-family: var(--font-article);
    margin: 5% 0;
    font-weight: 400;
  }
`
export const SmallHeading = styled.h5`
  @media ${device.mobileS} {
    font-size: var(--heading-size-small);
    font-family: var(--font-main);
    font-weight: 500;
    z-index: 1;
  }
`
export const MediumText = styled.p`
  @media ${device.mobileS} {
    font-size: var(--text-size-medium);
    font-family: var(--font-article);
    padding: 0;
    margin: 0;
    font-weight: 300;
  }
`
export const MediumArticle = styled.p`
  @media ${device.mobileS} {
    font-size: var(--article-size-medium);
    font-family: var(--font-article);
    font-weight: 400;
  }
`
export const MediumHeading = styled.h3`
  @media ${device.mobileS} {
    font-size: var(--heading-size-medium);
    font-family: var(--font-heading);
    font-weight: 500;
  }
`
export const LargeText = styled.p`
  @media ${device.mobileS} {
    font-size: var(--text-size-large);
    font-family: var(--font-article);
    font-weight: 300;
  }
`
export const LargeArticle = styled.p`
  @media ${device.mobileS} {
    font-size: var(--article-size-large);
    font-family: var(--font-article);
    font-weight: 400;
  }
`
export const LargeHeading = styled.h1`
  @media ${device.mobileS} {
    font-size: var(--heading-size-large);
    font-family: var(--font-article);
    font-weight: 500;
  }
`

export const MainHeading = styled.h1`
  @media ${device.mobileS} {
    font-size: var(--main-size-large);
    font-family: var(--font-accent);
    font-weight: 500;
    margin: 5% 0;
  }
`
export const SectionTitle = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15%;
  margin: 0px auto;
  color: white;
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-secondary);
  border-top: 1px solid var(--color-secondary);
`
export const SectionWord = styled.p`
  @media ${device.mobileS} {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0 5%;
  }
  @media ${device.laptop} {
    font-weight: 500;
    font-size: 5rem;
  }
`
export const UnstyledButton = styled.button`
  all: unset;
`
export const PillButtonStyle = styled(UnstyledButton)`
  @media ${device.mobileS} {
    display: flex;
    height: 7vh;
    align-items: center;
    padding: 0 5%;
    width: 35vw;
    justify-content: center;
    margin: 0 1vw;
    border-radius: 20vh;
    border: 3px solid var(--color-primary);
    background-color: var(--color-accent-secondary);
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: inset 3px 3px 4px var(--color-primary);
    }
  }
`
export const OutlinedButtonText = styled(UnstyledButton)`
  @media ${device.mobilsS} {
    transition: all 0.3s ease;
    border: 4px solid var(--color-primary);
    height: 50px;
    padding: 0 20px;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      display: flex;
      z-index: -1;
      background: var(--color-primary);
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
    :hover {
      color: white;
      ::before {
        visibility: visible;
        animation: ${colorFlicker} 0.4s forwards;
      }
    }
  }
  @media ${device.laptopL} {
    border: 10px solid var(--color-primary);
    height: 80px;
    ::after {
      height: 100%;
    }
  }
`
export const Link = styled.a``

export default GlobalStyle
