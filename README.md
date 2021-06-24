# Protesto Web

### Estrutura de Requisições da API

<hr/>

➜ **Descurtir** _(dislike)_

- Rota: `/protest/dislike/{param}`
   - Parâmetro: `Protest ID`
     - Método: `PUT`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest/dislike/1', { method: 'PUT' })
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>

➜ **Curtir** _(like)_

- Rota: `/protest/dislike/{param}`
   - Parâmetro: `Protest ID`
     - Método: `PUT`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest/like/1', { method: 'PUT' })
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>

➜ **Cadastrar Novo Protesto**

- Rota: `/protest`
   - Corpo _(JSON)_: 
     ```js
     { user: 'Nome de Usuário',  message: 'Mensagem do Protesto' }
     ```
     - Método: `POST`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      { user: 'Nome de Usuário',  message: 'Mensagem do Protesto' }
    ),
  }
)
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>

➜ **Deletar Protesto**

- Rota: `/protest/{param}`
   - Parâmetro: `Protest ID`
     - Método: `DELETE`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest/like/1', { method: 'DELETE' })
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>

➜ **Visualizar Todos os Protestos**

- Rota: `/protest`
   - Parâmetro: `Nenhum`
     - Método: `GET`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest')
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>

➜ **Visualizar Protesto por ID**

- Rota: `/protest/{param}`
   - Parâmetro: `Protest ID`
     - Método: `GET`

> Exemplo utilizando browser **fetch**
```js
fetch('/protest/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

<hr/>


