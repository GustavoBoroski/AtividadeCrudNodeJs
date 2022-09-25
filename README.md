## Sistema desenvolvido para o Teste Programa de Trainee


## Backend 
* Linguagem utilizada: Node.js
* Banco: Msql


## Frontend
* Linguagem utilizada: vue.js

## Observações e comentários
* Devido a erros durante o versionamento do código, foi necessário estar separando os projetos em dois repositorios. 

* **Repositórios:**
* https://github.com/GustavoBoroski/AtividadeFront -> FrontEnd
* https://github.com/GustavoBoroski/AtividadeCrudNodeJs -> BackEnd (Projeto Atual)

## Sobre os pontos de entrega

* Desenvolva uma API gerenciar links, com a URL e um título/label. Os links também podem ser editados e excluídos.
> Feito apenas no backend. Front não permitiu realizar as funções solicitadas. 

* Construa uma interface, como quiser, para que um usuário possa ver e gerenciar os links manualmente
> Feito a tela de cadastro dos links.

* Automatize este processo de salvar links com um web crawler que importe artigos de seus blogs favoritos, como a [devGo](https://devgo.com.br/).
> Não realizado. Infelizmente nunca utilizei automação com web crawler, então não consegui realizar o aprendizado durante o tempo estipulado para estar aplicando na api.

* Hospede sua aplicação em algum servidor.
> Não realizado. Não consegui realizar esse processo, pois a integração do front com o back não estava funcionando corretamente. (Consumindo o back e salvando no banco).


## Registros do Postman

* Buscar todos os registros:
* Rota: http://localhost:3000/api/links
> Retorno:
```
{
    "error": "",
    "result": [
        {
            "codigo": 5,
            "nomeDoSite": "TechMundo",
            "primeiroNomeAutor": "Gustavo",
            "segundoNomeAutor": "Boroski",
            "dataPublicacao": "2022-08-18T03:00:00.000Z",
            "linkDoSite": "http://www.techmundo.com.br"
        },
        {
            "codigo": 6,
            "nomeDoSite": "TechTudo",
            "primeiroNomeAutor": "Patricia",
            "segundoNomeAutor": "Malheiro",
            "dataPublicacao": "2019-04-08T03:00:00.000Z",
            "linkDoSite": "http://www.techtudo.com.br"
        },
        {
            "codigo": 9,
            "nomeDoSite": "SaudeFit",
            "primeiroNomeAutor": "Mauricio",
            "segundoNomeAutor": "Boroski",
            "dataPublicacao": "2020-05-01T03:00:00.000Z",
            "linkDoSite": "http://www.SaudeFit.com.br"
        },
        {
            "codigo": 10,
            "nomeDoSite": "Insert",
            "primeiroNomeAutor": "Mauricio",
            "segundoNomeAutor": "Boroski",
            "dataPublicacao": "0000-00-00",
            "linkDoSite": "http://www.SaudeFit.com.br"
        },
        {
            "codigo": 11,
            "nomeDoSite": "Insert",
            "primeiroNomeAutor": "Mauricio",
            "segundoNomeAutor": "Boroski",
            "dataPublicacao": "2022-02-02T03:00:00.000Z",
            "linkDoSite": "http://www.SaudeFit.com.br"
        }
    ]
}
```

* Buscar um registro:
* Rota: http://localhost:3000/api/link/5
> Retorno:
```
{
    "error": "",
    "result": {
        "codigo": 5,
        "nomeDoSite": "TechMundo",
        "primeiroNomeAutor": "Gustavo",
        "segundoNomeAutor": "Boroski",
        "dataPublicacao": "2022-08-18T03:00:00.000Z",
        "linkDoSite": "http://www.techmundo.com.br"
    }
}
```

* Inserir um registro:
* Rota: http://localhost:3000/api/link
> Retorno:
```
{
    "error": "",
    "result": {
        "nomeDoSite": "Teste",
        "primeiroNomeAutor": "Mauricio",
        "segundoNomeAutor": "Boroski",
        "dataPublicacao": "2022/02/02",
        "linkDoSite": "http://www.SaudeFit.com.br"
    }
}
```

* Alterar um registro:
* Rota: http://localhost:3000/api/link/6
> Retorno:
```
{
    "error": "",
    "result": {
        "codigo": "6",
        "nomeDoSite": "TechTudo",
        "primeiroNomeAutor": "Gustavo",
        "segundoNomeAutor": "Malheiro",
        "dataPublicacao": "2019-04-08T03:00:00.000Z",
        "linkDoSite": "http://www.techtudo.com.br"
    }
}
```

* Deletar um registro:
* Rota: http://localhost:3000/api/link/8
> Retorno:
```
{
    "error": "",
    "result": {}
}
```

## Registros do banco
```
* create database dbApiLinks;
* use dbApiLinks;

create table links (
  codigo int primary key auto_increment,
   nomeDoSite varchar(100),
   primeiroNomeAutor varchar(30),
   segundoNomeAutor varchar(30),
   dataPublicacao date,
   linkDoSite varchar(250)
);
```
