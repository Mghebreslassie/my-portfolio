import styled from "styled-components"
import { device } from "./device"

export const ProjectContainer = styled.div`
  padding: 20% 0;
`
export const Container = styled.div`
@media ${device.mobileS} {
  
  height: 60vh;
  padding: 0 10%;
  width: 85%;
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
}
  height: 35vh;
  width: 95%;
  margin: 0 auto;
}
`
export const Top = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  height: 100%;
`
export const Bottom = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
`
export const LeftSide = styled.div`
  @media ${device.mobileS} {
    flex: 1;
    overflow: hidden;
  }
`
export const ImageContainer = styled.img`
  width: 90%;
  object-fit: contain;
  border-radius: 10px;
`
export const RightSide = styled.div`
  @media ${device.mobileS} {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 5%;
    justify-content: center;
    align-items: end;
  }
`
export const ItemTitle = styled.div`
  height: 15%;
  text-align: right;
  padding: 5% 0;
`
export const ItemDesc = styled.div`
  text-align: right;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 5% 0;
`
export const ItemSummary = styled.div`
  text-align: right;
  height: 55%;
  display: flex;
  align-items: center;
`
export const TechIconList = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & i {
    color: grey;
    font-size: 2rem;
  }
`
export const ViewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ViewButtonText = styled.h4`
  font-size: 1.3rem;
  font-family: quicksand;
  font-weight: 300;
`
export const SmallItemText = styled.h5`
  font-size: 1.2rem;
  font-family: var(--font-heading);
  font-weight: 300;
`
export const MediumItemText = styled.h4`
  font-size: 1.3rem;
  font-family: var(--font-heading);
  font-weight: 300;
  text-align: right;
  color: var(--color-primary);
`
export const LargeItemText = styled.h3`
  font-size: 1.5rem;
  font-family: var(--font-heading);
  font-weight: 500;
`
