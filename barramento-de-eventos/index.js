require('dotenv').config()
const express = require('express')
const axios = require ('axios')
const app = express()
app.use(express.json())

const { BARRAMENTO_PORTA }  = process.env

app.post('/eventos', (req, res) => {
  // {tipo: LembreteCriado, payload: { id: 1, texto: "Fazer cafe"}}
  const evento = req.body
  console.log(evento)

  //direcionando o evento para o mss de lembretes
  axios.post('http://localhost:4000/eventos', evento)

  //direcionando o evento para o mss de observações
  axios.post('http://localhost:5000/eventos', evento);

  //direcionando o evento para o mss de consulta
  axios.post('http://localhost:6000/eventos', evento)

  res.status(200).send({msg: 'ok'})
})

app.listen(
  BARRAMENTO_PORTA, 
  () => console.log(`Barramento. ${BARRAMENTO_PORTA}`)
)