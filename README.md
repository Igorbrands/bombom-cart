
# Choco Shopping Cart

### Rodando o projeto
Primeiro dê um 
```
yarn install
```
ou
```
npm install
```
 Em seguida use o json-server para rodar nossa fake API.  
 Instale globalmente e rode o comando em seguida:
 ```
npm install -g json-server
json-server --watch server.json
```
Ou , como eu prefiro, direto via NPX:
```
npx json-server --watch server.json
```
Qualquer duvida confira a documentação:  
https://www.npmjs.com/package/json-server#getting-started

Agora vamos com a fake API rodando na porta 3000, precisamos rodar o projeto com:
```
yarn start
```
Irá perguntar por uma nova porta para rodar, basta apertar 'y' e confirmar e pronto!  
Nosso projeto está rodando provavelmente na http://localhost:3001
