import { ReactNode } from "react";
import { GridWrapper, Container } from "./styles";

interface IGridCardsProps {
  children: ReactNode;
  categoryName: string;
}

const GridCards = ({children, categoryName}: IGridCardsProps) => {
  return (
    <Container>
      <h1>{categoryName}</h1>
      <GridWrapper>
       {children}
      </GridWrapper>
    </Container>
  );
};

export default GridCards;
