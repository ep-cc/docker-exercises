const express = require('express');
const os = require('os');

const app = express()

app.get('/', async (req, res) => {
  const host = os.hostname();
  res.send(`${host} says hello`);
});

app.listen(5000, async ()=>{
    console.log(`${os.hostname()} listening on port 5000`)
});
