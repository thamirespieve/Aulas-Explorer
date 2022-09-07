const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')
const { verify } = require('jsonwebtoken')

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('jwt token não informado', 401)
  }

  //Pegando o token que vem dentro do authHeader, para isso utilizar o split que separa os conteudos pelo espaço
  // Pegando só a segunda parte pois primeira não interessa
  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id)
    }

    return next()
  } catch {
    throw new AppError('jwt token inválido', 401)
  }
}

module.exports = ensureAuthenticated
