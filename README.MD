# Como subir o projeto

## 1. Backend
Abra o arquivo application.properties em \backend\src\main\resources e na chave
**spring.datasource.url** coloque o caminho do banco de dados. ex: jdbc:postgresql://localhost:5000/hotel
Certifique que a porta esteja apontando para a qual o banco de dados que será utilizado está ouvindo.

Após isso, o projeto ira subir na porta 8080.

Coloque, respectivamente, nas chaves **spring.datasource.username** e
**spring.datasource.password**
o usuário e senha do banco de dados.

Após isto, abra o projeto usando uma IDE, deixe o maven instalar as dependências e inicialize o projeto. **Não esqueça de ligar o banco de dados**

**O Banco de Dados deve ser PostgreSQL**

Caso tenha problemas com a inicialização de dados inicias, delete o arquivo **data.sql** em \backend\src\main\resources
e em application.properties tire a chave spring.sql.init.mode=always

## 2. Frontend
Na pasta \CheckInHotelWebsite, abra um terminal e digite o comando **npm install** para baixar as dependências do projeto frontend. Após isto,
digite o comando **ng serve**. O projeto irá subir na porta 4200.

## 3. Utilizando
Na tela inicial **(http://localhost:4200/)** é possivel efetuar **Cadastro no Hospede** na aba Hospede e na aba Reserva fazer **Cadastro de Reserva**.

Para **cadastrar um hospede**, é necessário informar um nome, um CPF válido e telefone.

Para **cadastrar uma reserva**, é necessário informar um documento válido cadastrado anteriormente no cadastro de cliente, data de saida e entrada 
e se é necessário utilizar o estacionamento. Na aba de Reserva, também tem um botão que redireciona para a listagem de Reservas **(http://localhost:4200/listaReservas)**.

Na listagem de reservas, é possivel ver as reservas cadastradas. Ao clicar no botão Ver detalhes, o usuário é redirecionado a uma pagina
que mostra os detalhes da reserva. Nesta tela, é possivel fazer **Check In** e **Check Out** do hospede.
