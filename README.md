# Protesto Web

# Método || Rota || Parametro  

## Descurtir 

PUT    ||  /protest/dislike/  || id

## Curtir 

PUT    ||  /protest/like/     || id

## Cadastrar Protesto

POST   ||  /protest

{
  user: "nome do usario",
  message: "menssagem do protesto",
}
## Deletar Protesto

DELETE ||  /protest/           || id

## Todos os protestos

GET    ||  /protest

## Filtrar um protesto

GET    ||  /protest/            || id


