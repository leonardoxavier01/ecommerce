import { Container, TextImageButton, ImagesWrapper } from "./styles";
import marvel from "../../assets/images/marvel-logo.png";
import Button from "../Button";
import Image from "next/image";
import image2 from "../../assets/images/spider-man.png";
import Link from "next/link";

const Outdoor = () => {
  const endpointCategoryOutdoor: string = "cl5odikhr00500mutjzhzqg2u";

  return (
    <Container>
      <TextImageButton>
        <Image src={marvel} width={184} height={71} alt="marvel logo" />
        <h1>CONHEÇA A NOVA COLEÇÃO DE FUNKOS DA MARVEL</h1>
        <Link href={`/categories/${endpointCategoryOutdoor}`} passHref>
          <a>
            <Button color="#EE171F">COLEÇÃO MARVEL</Button>
          </a>
        </Link>
      </TextImageButton>
      <ImagesWrapper>
        <Image src={image2} width={430} height={430} alt="marvel logo" />
      </ImagesWrapper>
    </Container>
  );
};

export default Outdoor;
