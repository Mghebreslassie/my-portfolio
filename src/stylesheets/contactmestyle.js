import styled from "styled-components"
import { device } from "./device"

export const ContactContainer = styled.div`
  @media ${device.mobileS} {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`
export const Message = styled.div`
  @media ${device.mobileS} {
    background: var(--color-accent-secondary);
    padding: 5%;
    border-radius: 25px;
    margin: 10% 0;
  }
`
export const Header = styled.div`
  margin: 5vh 0;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormMain = styled.form`
  background: var(--color-accent-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`
export const Input = styled.input`
  @media ${device.mobileS} {
    display: block;
    width: 80%;
    height: 8vh;
    margin: 5% 0;
    border-bottom: 6px solid var(--color-primary);
    border-right: 12px solid var(--color-primary);
    padding-left: 5%;
    font-size: var(--text-size-small);
    font-family: var(--font-main);
  }
  @media ${device.laptop} {
    font-size: var(--text-size-large);
  }
`
export const TextArea = styled.textarea`
  @media ${device.mobileS} {
    display: block;
    width: 80%;
    height: 18vh;
    margin: 10% 0;
    border-bottom: 6px solid var(--color-primary);
    border-right: 12px solid var(--color-primary);
    padding-left: 5%;
    padding-top: 3%;
    font-size: var(--text-size-small);
    font-family: var(--font-main);
  }
  @media ${device.laptop} {
    font-size: var(--text-size-large);
  }
`
export const ButtonContainer = styled.div`
  margin-top: 5%;
  display: flex;
  width: 92%;
  justify-content: flex-end;
`
