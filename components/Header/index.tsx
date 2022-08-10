import { HeaderContainer, Wrapper, BoxImage } from "./styles";
import logo from "../../assets/images/logo-funko-store.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Link href={{ pathname: "/" }} passHref>
          <BoxImage>
            <Image src={logo} width={190} height={66} alt="Logo-funko-store" />
          </BoxImage>
        </Link>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
