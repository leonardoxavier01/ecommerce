import React, { createContext, useContext, useEffect, useState } from "react";
import Router from "next/router";
import ContainerPage from "../../components/ContainerPage";
import Input from "../../components/Input";
import { ContainerLogin, StyledForm } from "../../styles/pages/Auth";

interface IAdminAuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext({});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email);
    console.log(password);

    const response = await fetch("https://quiet-anchorage-15734.herokuapp.com/admin/auth", {
      method: "POST",
      mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const { auth, token } = await response.json();

    if (auth) {
      localStorage.setItem("token", token);

      Router.reload();
    } else {
      alert("Email ou senha incorreta");
    }
  };

  return (
    <ContainerLogin>
      <StyledForm onSubmit={onSubmit}>
        <h1>Faça seu Login</h1>
        <Input
          placeholder="Email"
          type="email"
          id="email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          id="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </StyledForm>
    </ContainerLogin>
  );
};

export const AdminAuthProvider = ({ children }: IAdminAuthProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch("https://quiet-anchorage-15734.herokuapp.com/admin/me", {
          mode:'no-cors',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (result.auth) {
          setIsAuthenticated(true);
        }
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      <ContainerPage color={!isAuthenticated ? "#5d2d8c" : ""}>
        {isAuthenticated ? children : <Login />}
      </ContainerPage>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
