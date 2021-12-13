require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const db = require('./models')
const createSeeds = require('./models/seeders')

const app = express()
const PORT = process.env.PORT 

app.use(logger('dev'))

app.use(express.json()) //http://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })) //http://expressjs.com/en/5x/api.html#express.urlencoded


const usuarioRouter = require('./routes/usuarios')
const citasRouter = require('./routes/citas')
const medicosRouter = require('./routes/medicos')


app.use('/usuarios', usuarioRouter)
app.use('/citas', citasRouter)
app.use('/medicos', medicosRouter)



app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
})



// const seed = process.argv[2]

// if (seed) {
//   db.sequelize
//     .sync({ force: true })
//     .then(() => {
//       createSeeds()
//     })

//     .catch((err) => {
//       console.error(err)
//     })
// } else {
//   db.sequelize
//     .sync()
//     .then(() => {
//       app.listen(PORT, () => {
//         console.info(`App listening on port ${PORT}`)
//       })
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }



module.exports = app
 