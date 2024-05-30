# MongoDB Prática: Gerenciamento de Dados em uma Loja

Este repositório contém arquivos JavaScript que demonstram como utilizar o MongoDB para gerenciar dados de uma loja, desde a inserção de clientes e endereços até a realização de consultas para extrair informações específicas.

Arquivos Incluídos:
- inserir-clientes.js: Script para inserir informações básicas dos clientes na collection "vendas".
- inserir-enderecos.js: Script para atualizar os documentos existentes na collection "vendas" com informações de endereços dos clientes.
- inserir-compras.js: Script para adicionar detalhes das compras efetuadas pelos clientes na collection "vendas".
- consultas.js: Script contendo as consultas especificadas, incluindo consultas para listar todos os documentos, localizar informações de um cliente específico, buscar clientes VIPs, exibir compras de um cliente específico e listar todos os nomes de produtos comprados por todos os clientes.

## Como Usar:

1. Certifique-se de ter o MongoDB instalado em seu sistema.
2. Clone este repositório em sua máquina local.
3. Abra um terminal na pasta do repositório.
4. Execute cada script JavaScript utilizando o shell do MongoDB. Por exemplo:

``` mongosh < inserir-clientes.js ```

Após a execução dos scripts, você pode verificar os resultados utilizando consultas no shell do MongoDB. Por exemplo:

```
mongosh
use lojadb
db.vendas.find({}).pretty()
```

## Consultas Disponíveis:

- Consulta 1: Retornar todos os documentos da collection.
- Consulta 2: Localizar as informações da cliente "Maria".
- Consulta 3: Buscar clientes VIPs da loja.
- Consulta 4: Exibir as compras efetuadas por "Marcos".
- Consulta 5: Retornar todos os nomes de produtos comprados por todos os clientes.