import styled from "styled-components"
import { device } from "./device"
import { stretch, dropDown, dropUp } from "./globalStyle"

export const NavContainer = styled.div`
  @media ${device.mobileS} {
    background: var(--color-accent-secondary);
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: sticky;
    top: 0;
    border-bottom: 1px solid grey;
    box-shadow: 2px 2px 1rem grey;
  }
`
export const MobileContainer = styled.div`
  @media ${device.mobileS} {
    position: absolute;
    top: 100%;
    right: 0;
    width: 70%;
    height: 50vh;
    background: var(--color-primary);
    &.open {
      animation: ${dropDown} 0.3s ease-out forwards;
    }
    &.close {
      animation: ${dropUp} 0.3s ease-out forwards;
    }
  }
  @media ${device.laptop} {
    display: none;
  }
`

export const Logo = styled.div`
  @media ${device.mobileS} {
    display: flex;
    padding: 0 5%;
    justify-content: flex-start;
    flex: 1;
    z-index: 1;
    cursor: pointer;
  }
  @media ${device.laptop} {
    flex: 1;
    padding: 0;
    justify-content: center;
  }
`
export const ItemContainer = styled.div`
  @media ${device.mobileS} {
    display: none;
    z-index: 1;
  }
  @media ${device.laptop} {
    display: block;
    flex: 5;
    height: 100%;
  }
`
export const ItemList = styled.ul`
  @media ${device.mobileS} {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    position: relative;
  }
`
export const Item = styled.li`
  @media ${device.mobileS} {
    cursor: pointer;
    height: 100%;
    text-align: center;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    ::before {
      transition: opacity 0.3s linear;
      content: "";
      display: flex;
      justify-content: center;
      visibility: hidden;
      position: absolute;
      height: 5px;
      width: 100%;
      background: var(--color-accent-primary);
      top: 70%;
      left: 0;
    }
    :hover {
      color: var(--color-accent-primary);
      ::before {
        visibility: visible;
        animation: ${stretch} 0.3s forwards;
      }
    }
  }
  @media ${device.laptop} {
    border: none;
    background-color: var(--color-accent-secondary);
    color: black;
    display: flex;
    justify-content: center;
    transition: all 0.15s ease;
    position: relative;
    ::before {
      transition: opacity 0.3s linear;
      content: "";
      display: flex;
      justify-content: center;
      visibility: hidden;
      position: absolute;
      height: 5px;
      width: 100%;
      background: var(--color-accent-primary);
      top: 70%;
      left: 0;
    }
  }
`
export const Resume = styled.div`
  @media ${device.mobileS} {
    display: none;
    z-index: 1;
    cursor: pointer;
  }
  @media ${device.laptop} {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`
export const MobileMenu = styled.div`
  @media ${device.mobileS} {
    display: flex;
    padding: 0 5%;
    justify-content: flex-end;
    flex: 1;
    z-index: 1;
    cursor: pointer;
  }
  @media ${device.laptop} {
    display: none;
  }
`
