import React, { useState } from "react"
import {
  MediumHeading,
  OutlinedButtonText,
  SmallText,
  Link,
} from "../stylesheets/globalStyle"
import {
  Item,
  ItemContainer,
  ItemList,
  Logo,
  MobileContainer,
  MobileMenu,
  NavContainer,
  Resume,
} from "../stylesheets/navbarstyle"

function NavBar() {
  const [showMobile, setShowMobile] = useState(false)

  const isOpen = () => {
    if (showMobile) {
      closeMenu()
    } else {
      setShowMobile(!showMobile)
    }
  }

  const closeMenu = () => {
    setTimeout(() => {
      setShowMobile(!showMobile)
    }, 500)
    const menu = document.getElementById("mobile-container")
    try {
      menu.classList.remove("open")
      menu.classList.add("close")
    } catch (error) {}
  }

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "10" }}>
      <NavContainer>
        <Logo onClick={() => console.log("hello")}>
          <SmallText>MG</SmallText>
        </Logo>
        <ItemContainer>
          <ItemList>
            <Item>
              <SmallText>
                <Link href="#about">about</Link>
              </SmallText>
            </Item>
            <Item>
              <SmallText>
                <Link href="#projects">projects</Link>
              </SmallText>
            </Item>
            <Item>
              <SmallText>
                <Link href="#techstack">skills</Link>
              </SmallText>
            </Item>
            <Item>
              <SmallText>
                <Link href="#contact">contact</Link>
              </SmallText>
            </Item>
          </ItemList>
        </ItemContainer>
        <Resume>
          <OutlinedButtonText>
            <SmallText>resume</SmallText>
          </OutlinedButtonText>
        </Resume>
        <MobileMenu onClick={() => isOpen()}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40px"
            height="25px"
            viewBox="0 0 122.879 103.609"
            enableBackground="new 0 0 122.879 103.609"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
              />
            </g>
          </svg>
        </MobileMenu>
      </NavContainer>
      {showMobile && (
        <MobileContainer
          className="open"
          id="mobile-container"
          onClick={() => isOpen()}
        >
          <ItemList>
            <Item>
              <MediumHeading>about</MediumHeading>
            </Item>
            <Item>
              <MediumHeading>projects</MediumHeading>
            </Item>
            <Item>
              <MediumHeading>skills</MediumHeading>
            </Item>
            <Item>
              <MediumHeading>contact</MediumHeading>
            </Item>
          </ItemList>
        </MobileContainer>
      )}
    </div>
  )
}

export default NavBar
