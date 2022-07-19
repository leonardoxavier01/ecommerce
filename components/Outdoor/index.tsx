import { useEffect, useState } from "react";
import { Container, TextImageButton, ImagesWrapper } from "./styles";
import marvel from "../../assets/images/marvel-logo.png";
import Button from "../Button";
import Image from "next/image";
import spiderMan from "../../assets/images/spider-man.png";
import peggyCarter from "../../assets/images/stellar-vortex.png";
import Link from "next/link";

const Outdoor = () => {
  const endpointCategoryOutdoor: string = "cl5odikhr00500mutjzhzqg2u";

  const imagesArray = [spiderMan, peggyCarter];

  const [image, setImage] = useState<number>(0);
  const [imageAlt, setImageAlt] = useState<string>("spider-man");
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (change === false) {
        setImage(1);
        setImageAlt("stellar-vortex");
        setChange(true);
      } else {
        setImage(0);
        setImageAlt("spider-man");
        setChange(false);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [change]);

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
        <Image
          src={imagesArray[image]}
          width={430}
          height={430}
          alt={`funko pop ${imageAlt}`}
        />
      </ImagesWrapper>
    </Container>
  );
};

export default Outdoor;
