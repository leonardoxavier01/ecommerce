import { AdminAuthProvider } from "../../../../contexts/auth";
import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { ChangeEventHandler } from "react";
import Logout from "../../../../components/Logout";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  return { props: { id } };
};

const inputFileChanged: ChangeEventHandler<HTMLInputElement> = async (
  element
) => {
  const { target } = element;

  const productId = target.getAttribute("data-id");

  if (!target.files) return;

  const token = localStorage.getItem("token");

  const file = target.files.item(0);

  const signedUrl = await fetch(
    "http://localhost:5000/admin/products/upload/sign-url",
    {
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
    }
  );

  const { url } = await signedUrl.json();

  const upload = await fetch(url, {
    method: "PUT",
    body: file,
  });

  if (upload.ok) {
    const response = await fetch(
      `http://localhost:5000/admin/products/${productId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          image: `products/${productId}/${file?.name}`,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      alert("update concluido");
    } else {
      alert("update falhou");
    }
  } else {
    alert("upload falhou");
  }
};

const Upload: NextPage<IParams> = ({ id }) => {
  return (
    <AdminAuthProvider>
      <form>
        <input type="file" onChange={inputFileChanged} data-id={id} />
      </form>
      <p>
        <Logout />
      </p>
    </AdminAuthProvider>
  );
};

export default Upload;
