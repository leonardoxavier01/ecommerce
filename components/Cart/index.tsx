import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { FaShoppingCart } from "react-icons/fa";
import { IconStyled, StyledIconCart } from "./styles";
import Link from "next/link";

const IconCart = () => {
  const { quantityTotal } = useContext(CartContext);

  return (
    <Link href={"/cart"} passHref>
      <StyledIconCart>
        <IconStyled>
          <span>{quantityTotal.total}</span>
          <FaShoppingCart size={37} color={"white"} />
        </IconStyled>
      </StyledIconCart>
    </Link>
  );
};

export default IconCart;
