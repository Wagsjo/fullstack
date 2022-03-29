const express = require('express')
const port = 1337

//app är webbservern vi bygger
const app = express()

// Detta svarar servern när det kommer ett "get /" request. req och res är middleware som svarar mellan requesten och responsen.
app.get('/icecream', (req, res) => {
  res.send(`Du hitta mig på port ${port}`)
})

app.listen(port, () => {
  console.log(`Servern är igång på ${port}`)
})
