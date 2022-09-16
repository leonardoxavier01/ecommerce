import React, { ChangeEventHandler } from "react";
import { baseUrl } from "../../services/baseUrl";
import { ContainerInputFile } from "./styles";

interface IParamsProps {
  id: string | number | undefined;
}

const inputFileChanged: ChangeEventHandler<HTMLInputElement> = async (
  element
) => {
  const { target } = element;

  const productId = target.getAttribute("data-id");

  if (!target.files) return;

  const token = localStorage.getItem("token");

  const file = target.files.item(0);

  const signedUrl = await fetch(`${baseUrl}/admin/products/upload/sign-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: file?.type,
      name: file?.name,
      id: productId,
    }),
  });

  const { url } = await signedUrl.json();

  const upload = await fetch(url, {
    method: "PUT",
    body: file,
  });

  if (upload.ok) {
    const response = await fetch(`${baseUrl}/admin/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({
        image: `products/${productId}/${file?.name}`,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert("update concluido");
    } else {
      alert("update falhou");
    }
  } else {
    alert("upload falhou");
  }
};

const Upload: React.FC<IParamsProps> = ({ id }) => {
  return (
    <ContainerInputFile>
      <label htmlFor={`uploadImage${id}`}>Enviar imagem</label>
      <input
        type="file"
        onChange={inputFileChanged}
        data-id={id}
        id={`uploadImage${id}`}
      />
    </ContainerInputFile>
  );
};

export default Upload;
