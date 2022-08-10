import { memo, useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ButtonActionModal from "../ButtonActionModal";
import ButtonOpenModal from "../ButtonOpenModal";
import Input from "../Input";
import Modal from "../Modal";

interface IModalProps {
  categoryId: string;
  categoryName: string;
}

const CategoryModalPut: React.FC<IModalProps> = ({ categoryId }) => {
  const [isPut, setIsPut] = useState<boolean>(false);

  const { updateCategory, setUpdateCategory, putCategory } =
    useContext(CategoriesContext);

  const handlePutCategory = () => {
    putCategory(categoryId);
    setIsPut(false);
  };

  return (
    <>
      {isPut ? (
        <Modal>
          <label>Digite o novo nome desta categoria:</label>
          <Input
            type="text"
            value={updateCategory}
            onChange={(e: any) => setUpdateCategory(e.target.value)}
          />
          <ButtonActionModal
            backgroundColor="tranparent"
            onClick={() => setIsPut(false)}
          >
            Cancelar
          </ButtonActionModal>
          <ButtonActionModal
            backgroundColor="#2cdb46"
            colorFont="white"
            onClick={handlePutCategory}
          >
            Alterar
          </ButtonActionModal>
        </Modal>
      ) : (
        <ButtonOpenModal
          backgroundColor="#d1d1cf"
          onClick={() => setIsPut(true)}
        >
          Alterar nome
        </ButtonOpenModal>
      )}
    </>
  );
};

export default memo(CategoryModalPut);
