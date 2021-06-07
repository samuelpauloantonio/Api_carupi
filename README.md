# <P style="text-align:center">Avaliação Técnica - backend</P>

### Este é um desafio da  carupi é um empresa focada no ramo de automóvies.

<br/>


O desáfio consiste em criar API REST  com as funcionalidade principais de um CRUD, seguindo alguns principios da programação como o SOLID  E TDD.

---

<br>

## Principas Funcionalidades

Criar um gerenciamento onde seja possível ```` Criar, Listar, Editar e Visualizar um carro````.
Atributos de um Carro são:
- Marca
- Model
- Versão
- Ano
- Quilometragem
- Tipo de Câmbio
- Preço de venda
<br>
## Instruções:
- Deve ser utilizado NodeJS e MongoDb
- Crie um README com orientações para a instalação.
- O projeto deve ser entregue através de um ou mais repositórios no github.
<br/>
## Plus:
- Cubra pelo menos 1 recurso de seu código com testes unitários com Jest
<br/>
<br/>
----

## Desemvolvimento
-- Principais Tecnologias usadas :

- EXPRESS - `para criar o servidor`,
- NODE JS - `para trazer o javascript no backend`
- JEST -      `para fazer os testes`
- TYPESCRIPT - `para dar tipagem ao javascript `
- MONGODB - `como Bando de Dados`
- TYPEORM `para ajudar no mapeamento do bando `
- EXPRESS-VALIDATOR - `para validar as rotas`
- GIT `para controlo de verção do projecto`
----
<br/>
<br/>

## CONFIGURAÇÕES INICIAS
-- Primero temos que install as dependências do projecto seja utilizando o gerenciador de patocos ````  Yarn OU NPM ```` e no directório do projecto no terminar rodar :
```
  yarn  | npm install
```

***
<br/>

###  Aseguir devemos ter na nossa maquina instalado o banco de Dados o ```MongoDB``` .

Para fazer a conexão basta no directório do projecto localizar o arquivo ```.env``` e modificalo com base as configurações do nosso banco de dados com a ``URL pode ser localhost ``caso seja local, a`` PORTA do banco de dados do MongoDB``, o ``USERNAME``, a ``PASSWORD`` e o ``NOME DO DATABASE OU BANCO DE DADOS``..  exemplos do meu

```
DB_MONGO_URL  = localhost,
DB_PORT = 27017
DB_USERNAME = ""
DB_PASSWORD = ""
DATABASE = vehicles
```
Assim basta apenas modicar o arquivo com base as tuas configurações .
<br/>
<br/>

 ## RODAR O PROJECTO
 <br/>

 -  ``Depois de instalar as dependências do projecto``
 -  ```Intalar o Banco de Dados MongoDB```
 -  ``e configurado o arquivo .env``


 basta rodar o comando no raiz do projecto e terminal
```
yarn dev:server | npm run dev:server
```

## COMO UTILIZAR API REST

Para ajudar no processo precisaremos de uma aplicação Client API como o`` Insomnia ou Postman``

Com ele instalados basta apenas colocar a seguinte URL
```
http://localhost:veiculos
```

Antecedido pelo metodo HTTP  que queremos

- GET
- GET/:id
- GET/query
- POST
- PUT
- DELETE
 <br/>


### `NA ROTA GET`

 Nesta rota lista todos os carros cadastrados ou não caso não exista nenhum `exemplo :`

 ```
 GET  http://localhost:veiculos/
 ```
<br/>

 ### `NA ROTA GET by id`
 Permetido buscar apenas um carro que exista pelo seu id

  ```
 GET/:id  http://localhost:veiculos/60bc34b5a042da797d265f19
 ```
<br/>

 ### `NA ROTA GET by query`



  Nesta rota lista todos  os carros cadastrados filtrados por todos os atributos do carro seja, - Marca
- Model
- Versão
- Ano
- Quilometragem
- Tipo de Câmbio
- Preço de venda.
-  ou não caso não exista nenhum `exemplo :`
  ```
 GET/:query - http://localhost:3333/veiculos?ano=2013
 ```

 ### `NA ROTA POST `

Todos os campos são obrigátorios,

-Não poderá criar carros com os 4 dados iguais de uma so vez caso já exista o carro com os mesmos dados com` a mesma marca , mesmo model,  mesma versao e mesmo ano , este carro não sera criado caso ja exista um igual`
 ```
 POST/  http://localhost:veiculos/

 {
	"marca" :"Toita Corola",
	"model" : "X9",
	"versao" : "v4",
	"ano":2013,
	"quilometragem":4525,
	"preco_de_venda":12600,
	"tipo_de_cambio":"vendido"
}
 ```
<br/>

 ### `NA ROTA PUT by id`

 Permetido actualizar apenas um carro que exista pelo seu id

```
 PUT/  http://localhost:veiculos/60bc34b5a042da797d265f19

 {
	"marca" :"Toita Novo",
	"model" : "X29",
	"versao" : "v8",
	"ano":2013,
	"quilometragem":4525,
	"preco_de_venda":2669,
	"tipo_de_cambio":"comprado"
}
 ```
<br/>

 ### `NA ROTA DELETE by id`
 Permetido deleter apenas um carro que exista pelo seu id

  ```
 DELETE/:id  http://localhost:veiculos/60bc34b5a042da797d265f19
 ```
<br/>


## COMO RODAR OS TESTE
- Para rodar os testes basta apenas rodar no terminal
 ```
  yarn test | npm run test
  ```

  ****
  <br/><br/>
  ### ``Os Melhores comprimentos com amor 😁❤️  Samuel Paulo Antónioc - samuelDev``
  ---
