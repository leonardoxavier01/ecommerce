import {
  WrapperCarousel,
  Container,
  Button,
  BoxCarouselButtons,
} from "./styles";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { ReactNode, useRef } from "react";

interface ICarouselProps {
  children: ReactNode;
  categoryName?: string;
  color?: string;
}

const Carousel = ({ children, categoryName, color }: ICarouselProps) => {
  const carousel = useRef<any>(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRigthClick = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <h1>{categoryName}</h1>
      <BoxCarouselButtons>
        <Button onClick={handleLeftClick}>
          <BsArrowLeftCircleFill size={50} color={"#5d2d8c"} />
        </Button>
        <WrapperCarousel color={color} ref={carousel}>
          {children}
        </WrapperCarousel>
        <Button onClick={handleRigthClick}>
          <BsArrowRightCircleFill size={50} color={"#5d2d8c"} />
        </Button>
      </BoxCarouselButtons>
    </Container>
  );
};

export default Carousel;
