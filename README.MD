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
