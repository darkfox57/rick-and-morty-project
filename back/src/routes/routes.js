const { Router } = require('express')
const apiRouter = require('./apiRouter')

const mainRouter = Router()

mainRouter.get('/', (req, res) => {
 res.status(200).json({ message: 'Hola Mundo' })
})


mainRouter.use("/rickandmorty/", apiRouter)

module.exports = mainRouter