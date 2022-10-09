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
  font-family: "Roboto", sans-serif; 
  background-color: #FAFAFA; 
}

a {
  color: inherit;
  text-decoration: none;
}
`;
