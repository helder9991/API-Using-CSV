# Versões dos softwares utilizados:
  node v14.16.0  
  npm v6.14.11  
  docker-compose 1.28.6

# Introdução
  Esse é um sistema simples que e os lista usuários cadastrados a partir de um CSV.
  

# Iniciando com o docker-compose
1 -  Rode o comando na pasta raiz do projeto:
  - ```docker-compose up```

# Iniciando sem o docker-compose
1 -  Crie o banco de dados com o nome ``csv``


2 - Rode o comando na pasta raiz do projeto:
  - ```npm```  ou ```yarn```

  Nota: Este comando irá baixar as dependências das bibliotecas (node_modules)


3 - Rode o comando na pasta raiz do projeto:
  - ```npm run typeorm migration:run```  ou ```yarn typeorm migration:run```

  Nota: Este comando irá criar as tabelas no banco de dados


4 - Rode o commando na pasta raiz do projeto:
  - ```npm run start``` ou ```yarn start```

  Nota: Este comando irá iniciar o backend

# Rotas existentes
  Para visualizar as rotas da aplicação, foi utilizado o Swagger, que pode ser acessado a partir de localhost:3333/api-docs