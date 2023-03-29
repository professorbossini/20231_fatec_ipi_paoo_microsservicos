require('dotenv').config()
const express = require ('express')
const app = express()
app.use(express.json())

const lembretes = {}
let idAtual = 0
//GET localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})

//POST localhost:4000/lembretes
// {"texto": "Fazer café"}
/*
{
  "1": {
    "id": 1,
    "texto": "Café"
  },
  "2": {
    "id": 2,
    "texto": "Cinema"
  }
}
*/
app.post('/lembretes', (req, res) => {
  idAtual++;
  const { texto } = req.body
  lembretes[idAtual] = {
    id: idAtual, texto
  }
  res.status(201).send(lembretes[idAtual])
})

const { MSS_LEMBRETES_PORTA } = process.env
app.listen(MSS_LEMBRETES_PORTA, () => {
  console.log(`Lembretes. Porta ${MSS_LEMBRETES_PORTA}.`)
})


