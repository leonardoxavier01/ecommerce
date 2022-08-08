import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  clear: none;
  text-decoration: none;
  list-style: none;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif; 
  background-color: #F1F1F1; 
}

a {
  color: inherit;
  text-decoration: none;
}
`;
