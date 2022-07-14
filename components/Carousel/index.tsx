import { WrapperCarousel, Container, Buttons } from "./styles";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { ReactNode, useRef } from "react";

interface ICarouselProps {
  children: ReactNode;
  categoryName?: string;
}

const Carousel = ({ children, categoryName }: ICarouselProps) => {
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
      <WrapperCarousel ref={carousel}>{children}</WrapperCarousel>
      <Buttons>
        <button onClick={handleLeftClick}>
          <BsArrowLeftCircleFill size={40} color={"#5d2d8c"} />
        </button>
        <button onClick={handleRigthClick}>
          <BsArrowRightCircleFill size={40} color={"#5d2d8c"} />
        </button>
      </Buttons>
    </Container>
  );
};

export default Carousel;
