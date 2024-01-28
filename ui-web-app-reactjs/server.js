const express = require('express')
const path = require('path')
const app = express()
const request = require('request');

var backendApiUrl='http://zuul-api-gateway.default:9999/'




app.use(express.static(path.join(__dirname, 'dist')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/myip', (req, res) => {
    // return res.send(''+backendApiUrl)
    return res.json({ url: ''+backendApiUrl });
})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`UI App Started...`);
    console.log(`Node Server is running on port ${PORT}.`);
});