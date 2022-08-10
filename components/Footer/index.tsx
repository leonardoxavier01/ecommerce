import { FooterContainer } from "./styles";
import logo from "../../assets/images/logo-funko-store.png";

import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <Image src={logo} width={190} height={66} alt="Logo-funko-store" />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
