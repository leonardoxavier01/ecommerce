# ECOMMERCE FUNKO-STORE

Ecommerce de colecionáveis da marca [funko](https://about.funko.com/)!

### 📋 Pré-requisitos

```
git
node
npm ou yarn
```

### 🔧 Instalação

Antes de inicar neste projeto você precisa estar com a Api de produtos devidamente configurada na sua máquina ou se preferir em um servidor remoto. Mas não se preocupe, eu já criei essa api e pode ser usada para qualquer tipo de produto. Para saber mais acesse [api-ecommerce](https://github.com/leonardoxavier01/ecommerce-api).

Depois de ter feito todas as devidas configuções e api estiver funcionando podemos iniciar a aplicação.

No seu terminal dê o comando:

```
git clone https://github.com/leonardoxavier01/ecommerce.git
```

E depois:

```
npm install ou yarn install
```
Na raiz do projeto crie um arquvio .env contendo a variável BACKEND_API e cujo seu valor seja url da sua api, por exemplo:

![print file .env](./assets/images/doc/print-file-env.png)

Após ter configurado sua variável de ambiente, também temos que configurar a baseUrl dentro de /services:

![print file base-url](./assets/images/doc/print-file-base-url.png)

Com isso nossa aplicação já pode funcionar e consumir os dados da nossa [api-ecommerce](https://github.com/leonardoxavier01/ecommerce-api), para testar basta subir a aplicação em modo de desenvolvimento com o comando:

```
npm run dev
```

E perfeito! agora nossa aplicação está funcionando.

![print funko-store-ecommerce](./assets/images/doc/print-funko-store.png)

## ⚙️ Início como Admin do ecommerce
Para acessar a área administrativa da aplicação na qual onde é feito o cadastro, alteração ee exclusão de produtos e categorias, basta acessar http://localhost:3000/admin/categories e inserir seus dados de acesso(email, password) que já estão configurados no nosso backend.

![print of login admin](./assets/images/doc/print-login-admin.png)

Após feito a autenticação você já pode gerenciar categorias e produtos. 

![print admin categories](./assets/images/doc/print-admin-categories.png)

A cima você pode criar categorias, deletar e alterar. Quando clicar em ver produtos você vai para a página de produtos desta categoria. 

![print admin products](./assets/images/doc/print-admin-products.png)

Assim como na página administrativa de categorias, na página de produtos você também pode cadastrar, deletar e alterar produtos.


## ⚙️ Personalização da aplicação
Alguns dos dados da aplicação não são dinâmicos, e por conta disso você deve personalizá-los da forma como pereferir.


## 💾 Sobre os dados



## ⚙️ Obejtivo da pokedex



## 🛠️ Construído com

- [React.js](https://reactjs.org/) - Biblioteca javascript
- [Styled-components](https://styled-components.com/) - Css in Javascript


## 🎁 Expressões de gratidão

- Faça brincadeiras com o projeto.
- Obrigado por ler até aqui 🤓.

---

⌨️ com ❤️ por Programação 😊
