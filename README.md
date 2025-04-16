Para executar o projeto de notas utilizando Vite, siga os passos abaixo:

1. **Acesse o diretório do projeto**: No terminal, navegue até o diretório onde o projeto está localizado.

2. **Instale as dependências**: Execute o comando:
   ```
   npm install
   ```
   Este comando instalará todas as dependências necessárias listadas no arquivo `package.json`.

3. **Inicie o servidor de desenvolvimento**: Após a instalação, inicie o servidor com:
   ```
   npm run dev
   ```
   O Vite iniciará o servidor e exibirá no terminal o endereço local, geralmente `http://localhost:5173`, onde a aplicação estará disponível.

**Funcionalidades da Aplicação:**

- **Tela de Login**: Permite que o usuário insira um apelido e senha. Há validação para garantir que os campos não estejam vazios e que a senha tenha pelo menos 8 caracteres.

- **Página Inicial**: Após o login, o usuário pode adicionar notas com título e descrição. As notas são exibidas em uma lista, e cada item possui um botão para remoção.

**Observação sobre o Layout:**

O layout da aplicação foi desenvolvido utilizando **Flexbox**, garantindo uma interface responsiva e organizada em diferentes tamanhos de tela. 
