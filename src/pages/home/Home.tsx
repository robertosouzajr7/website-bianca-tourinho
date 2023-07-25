import { useState } from "react";
import MenuMobile from "../../components/MenuMobile/MenuMobile";
import Menu from "../../components/Menu/Menu";
import Logo from "../../assets/logo-white-biatourinho.png";
import { HeaderStyled, LogoStyled, MainStyled } from "./Style";
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
          <MenuMobile
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
          />
          <Menu setVisibleMenu={setVisibleMenu} />
        </HeaderStyled>
      </MainStyled>
    </>
  );
};
