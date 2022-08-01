import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  const router = useRouter();

  const handleRemoveItem = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  const styledButton: {} = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={styledButton} onClick={handleRemoveItem}>
      <BiLogOut size={30} color={"red"} />
      sair
    </button>
  );
};

export default Logout;
