require('express-async-errors')
require('dotenv/config')

const express = require('express')
const cors = require('cors')
const api = express()
api.use(cors())

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

const PORT = process.env.PORT || 3000

api.listen(PORT, () => console.log(`Running at port ${PORT}`))
