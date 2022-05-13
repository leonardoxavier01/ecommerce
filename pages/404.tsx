import Link from "next/link";

const CustomError = () => {
  return (
    <div>
      <div>
        <h1>Item não encontrado</h1>
      </div>
      <Link href={{ pathname: "/" }}>Ir para home</Link>
    </div>
  );
};

export default CustomError;
