import React from "react";
import { ContainerInput } from "./styles";

const Input = (props: any) => {
  return (
    <ContainerInput>
      <input {...props} />
    </ContainerInput>
  );
};

export default Input;
