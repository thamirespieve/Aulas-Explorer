require('express-async-errors')

const express = require('express')

const api = express()
const routes = require('./routes/index.js')
const AppError = require('./utils/AppError.js')
const migations = require('./database/sqlite/migrations')
const uploadConfig = require('./configs/upload')

api.use(express.json())
api.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))
api.use(routes)

migations()

api.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message
    })
  }

  console.log(error)

  return response.status(500).json({
    status: 'Error',
    menssage: 'Internal server error'
  })
})

const PORT = 3333

api.listen(PORT, () => console.log(`Running at port ${PORT}`))
