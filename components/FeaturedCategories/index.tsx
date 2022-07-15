import { BoxButtonImage, Container } from "./styles";
import Image from "next/image";
import canecas from "../../assets/images/canecas.png";
import camisetas from "../../assets/images/camisetas.png";
import Button from "../Button";
import Link from "next/link";

const FeaturedCategories = () => {
  return (
    <Container>
      <BoxButtonImage color="#18434D">
        <div>
          <Image src={camisetas} width={421} height={267} alt="camisetas" />
        </div>
        <Link href="/categories/cl5mt91bo00230myy8a4gvele" passHref>
          <a>
            <Button>CAMISETAS</Button>
          </a>
        </Link>
      </BoxButtonImage>
      <BoxButtonImage color="#AB91A8">
        <div>
          <Image src={canecas} width={421} height={267} alt="canecas" />
        </div>
        <Link href="/categories/cl5mt5pm900060myytuifzazm" passHref>
          <a>
            <Button>CANECAS</Button>
          </a>
        </Link>
      </BoxButtonImage>
    </Container>
  );
};

export default FeaturedCategories;
