import { HeaderContainer, Wrapper, BoxImage } from "./styles";
import logo from "../../assets/images/logo-funko-store.png";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <BoxImage>
          <Image src={logo} width={190} height={66} alt="Logo-funko-store" />
        </BoxImage>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
