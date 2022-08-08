import { memo, useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ButtonActionModal from "../ButtonActionModal";
import ButtonOpenModal from "../ButtonOpenModal";
import Modal from "../Modal";

interface IModalProps {
  categoryId: string;
  categoryName: string;
}

const CategoryModalDel: React.FC<IModalProps> = ({
  categoryId,
  categoryName,
}) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const { deleteCategory } = useContext(CategoriesContext);

  const handleDeleteCategoy = () => {
    deleteCategory(categoryId);
    setIsDelete(false);
  };


  return (
    <>
      {isDelete ? (
        <Modal>
          <p>Todos os produtos desta categoria também serão excluídos!</p>
          <p>
            Tem certeza de que deseja excluir a categoria
            <strong> {categoryName}</strong> permanentemente?
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
            onClick={handleDeleteCategoy}
          >
            Deletar
          </ButtonActionModal>
        </Modal>
      ) : (
        <ButtonOpenModal
          backgroundColor="red"
          colorFont="white"
          onClick={() => setIsDelete(true)}
        >
          Deletar categoria
        </ButtonOpenModal>
      )}
    </>
  );
};

export default memo(CategoryModalDel);
