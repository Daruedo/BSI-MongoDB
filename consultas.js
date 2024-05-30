// 1 - Consulta que retorne todos os documentos da collection
db.vendas.find({}).pretty()

// 2 - Consulta que localize as informações da cliente “Maria”
db.vendas.find({ nome: "Maria" }).pretty()

// 3 - Busca que retorna os clientes VIPs da loja (VIP = 1)
db.vendas.find({ cliente_vip: 1 }, { nome: 1, _id: 0 }).pretty()

// 4 - Consulta que exiba as compras efetuadas por “Marcos”
db.vendas.find({ nome: "Marcos" }, { compras: 1, _id: 0 }).pretty()

// 5 - Consulta que retorne todos os nomes de produtos comprados por todos os clientes
db.vendas.find({ "compras.produto": { $exists: true } }, { "compras.produto": 1, _id: 0 }).pretty()