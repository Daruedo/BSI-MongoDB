db.vendas.updateOne(
  { nome: "João" },
  {
    $set: {
      compras: [
        {
          produto: "notebook",
          preco: 5000.00,
          quantidade: 1
        }
      ]
    }
  }
)

db.vendas.updateOne(
  { nome: "Marcos" },
  {
    $set: {
      compras: [
        {
          produto: "Caderno",
          preco: 20.00,
          quantidade: 1
        },
        {
          produto: "Caneta",
          preco: 3.00,
          quantidade: 5
        },
        {
          produto: "Borracha",
          preco: 2.00,
          quantidade: 2
        }
      ]
    }
  }
)

db.vendas.updateOne(
  { nome: "Maria" },
  {
    $set: {
      compras: [
        {
          produto: "Tablet",
          preco: 2500.00,
          quantidade: 1
        },
        {
          produto: "Capa para tablet",
          preco: 50.00,
          quantidade: 1
        }
      ]
    }
  }
)