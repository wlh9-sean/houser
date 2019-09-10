require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controllers/controller')


const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database Connected! 🚀')
}).catch(err => console.log(err))

app.get('/api/houses', ctrl.getHouse)
app.post('/api/house', ctrl.newHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)
app.put('/api/house/:id', ctrl.updateHouse)



app.listen(SERVER_PORT, () => console.log(`Serving on port ${SERVER_PORT} 🦄`))