import { useState } from "react";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Menu from "../../components/Menu/Menu";
import Logo from "../../assets/logo-white-biatourinho.png";
import { HeaderStyled, LogoStyled, MainStyled } from "./Style";
import Slide from "../../components/Slider/Slider";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Team from "../../components/Team/Team";
import Contact from "../../components/Contacts/Contact";
import Footer from "../../components/Footer/Footer";

export interface iHome {
  setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  visibleMenu?: boolean;
}
export const Home = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  return (
    <>
      <MainStyled>
        <HeaderStyled>
          <LogoStyled>
            <img src={Logo} alt="" />
          </LogoStyled>
          <Menu setVisibleMenu={setVisibleMenu} />
        </HeaderStyled>
        <MenuMobile visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
        <Slide />
        <About />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </MainStyled>
    </>
  );
};
