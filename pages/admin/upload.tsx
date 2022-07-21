import { NextPage } from "next";
import { ChangeEventHandler } from "react";

const inputFileChanged: ChangeEventHandler<HTMLInputElement> = async (
  element
) => {
  const { target } = element;

  if (!target.files) return;

  const file = target.files.item(0);

  const signedUrl = await fetch("http://localhost:5000/admin/products/upload/sing-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: file?.type,
      name: file?.name,
    }),
  });

  console.log(await signedUrl.json());
};

const Upload: NextPage = () => {
  return (
    <form>
      <input type="file" onChange={inputFileChanged} />
    </form>
  );
};

export default Upload;
