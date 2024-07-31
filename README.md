# outsera-tests-e2e-automation

Projeto de Testes E2E (Web) - Outsera

OBS: Escolhi o Cypress para o projeto porque trouxe vantagens em termos de facilidade de uso, integração contínua, e capacidade de testar toda a aplicação de forma eficiente. A ferramenta não só melhora a qualidade do código ao detectar erros mais cedo, mas também aumenta a confiança na entrega contínua do produto.

Informações básicas para realizar a instalação das tecnologias e configurações para automatizar os testes. 

**Plataforma**: Click para consultar a plataforma [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/).

## Dependências utilizado com cypress no projeto.

+ [Allure Report](https://allurereport.org/docs/cypress/)
+ [Cucumber](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Instalação do Gerenciado de Pacotes NodeJS.

Para instalar o NodeJs acesse o site oficial, click em Download [Versão LTS é a mais estável](https://nodejs.org/en/). 


## Instalação do Cypress e dependências

### No terminal execute o comando para instalação:

```
npm install
```

## Execução dos testes

### Para executar os testes pela interface do cypress:

```
npm run cy:open
```
### Para executar todos os testes, execute no terminal: 

```
npm run cy:run
```

### Para executar os testes por tags, execute no terminal:

```
npx cypress run -e TAGS=@tag
```

### Para executar os testes com report Allure, execute no terminal:

```
npx cypress run
```

* Após a execução dos testes, execute os comando abaixo para gerar e abrir o report:
```
npx allure generate
```
```
npx allure open
```
 
## Regras de Organização

Versão 1.0 

