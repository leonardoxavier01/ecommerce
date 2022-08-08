import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ButtonActionModal from "../ButtonActionModal";
import ButtonOpenModal from "../ButtonOpenModal";
import Modal from "../Modal";

interface IParamsProps {
  productId: string | number | undefined;
  productName: string;
}

const ProductModalDel: React.FC<IParamsProps> = ({
  productId,
  productName,
}) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const { handleDeleteProduct } = useContext(ProductsContext);

  const handleClickDelete = () => {
    handleDeleteProduct(productId);
    setIsDelete(false);
  };

  return (
    <>
      {isDelete ? (
        <Modal>
          <p>
            Tem certeza de que deseja excluir o produto
            <strong> {productName}</strong> permanentemente?
          </p>
          <ButtonActionModal
            backgroundColor="transparent"
            onClick={() => setIsDelete(false)}
          >
            Cancelar
          </ButtonActionModal>
          <ButtonActionModal
            backgroundColor="red"
            colorFont="white"
            onClick={handleClickDelete}
          >
            Deletar
          </ButtonActionModal>
        </Modal>
      ) : (
        <div
          style={{
            marginTop: "0.8rem",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <ButtonOpenModal
            backgroundColor="red"
            colorFont="white"
            onClick={() => setIsDelete(true)}
          >
            Excluir produto
          </ButtonOpenModal>
        </div>
      )}
    </>
  );
};

export default ProductModalDel;
