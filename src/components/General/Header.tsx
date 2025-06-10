import { useContext } from "react";
import { useLocation } from "wouter";

import { ConfigContext } from "../../services/configContext";
import {
  HeaderBackgroundImage,
  HeaderContainer,
  HeaderImage,
  HeaderSubBar,
  HeaderSubBarContainer,
} from "../styled_components";

import bgImage from "/bg_main.png";

import { HeaderProps } from "../../types";

function Header({ size = "long", children }: HeaderProps) {
  const config = useContext(ConfigContext);
  const [, setLocation] = useLocation();
  return (
    <HeaderContainer>
      <HeaderBackgroundImage size={size} backgroundImage={bgImage}>
        <a
          onClick={() => {
            setLocation("/");
          }}
        >
          <HeaderImage src={config.logo.src} alt={config.logo.src} />
        </a>
      </HeaderBackgroundImage>
      <HeaderSubBar>
        <HeaderSubBarContainer>{children}</HeaderSubBarContainer>
      </HeaderSubBar>
    </HeaderContainer>
  );
}

export default Header;