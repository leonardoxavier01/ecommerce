import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { ContainerInput, ContainerInputLogout } from "./styles";
import { IoMdAddCircle } from "react-icons/io";
import Input from "../Input";
import Logout from "../Logout";

const RegisterCategory: React.FC = () => {
  const { newCategory, setNewCategory, submitCategory } =
    useContext(CategoriesContext);

  return (
    <ContainerInputLogout>
      <Logout />
      <ContainerInput>
        <label style={{ marginRight: "0.8rem" }}>Cadastrar categoria: </label>
        <Input
          placeholder="Digite o nome da nova categoria"
          type="text"
          value={newCategory}
          onChange={(e: any) => setNewCategory(e.target.value)}
        />
        <button onClick={submitCategory}>
          <IoMdAddCircle size={40} />
        </button>
      </ContainerInput>
    </ContainerInputLogout>
  );
};

export default RegisterCategory;
