const { hash, compare } = require('bcryptjs')

const AppError = require('../utils/AppError')

const sqliteConnection = require('../database/sqlite')

class UsersController {
  /* Um controler tem no máximo 5 metodos(funções)

  *Index - GET para listar vários registros
  *Show - GET para lista um registro especifico 
  *create - POST para criar um registro
  *update - PUT para atualizar um registro
  *delete - DELETE para remover um registro
  */

  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (checkUserExists) throw new AppError('Email já cadastrado!')

    const hashedPassword = await hash(password, 8)

    await database.run(
      'INSERT INTO users (name,email,password) VALUES (?,?,?)',
      [name, email, hashedPassword]
    )

    response.status(201).json()

    // if (!name) {
    //   throw new AppError('É necessário informar o nome de usuário')
    // }

    // response.status(201).json({ name, email, password })
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const database = await sqliteConnection()

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

    if (!user) throw new AppError('Usuário não encontrado')

    const userWithUpdateEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    )

    if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id)
      throw new AppError('Email já cadastrado!!')

    user.name = name ?? user.name
    user.email = email ?? user.email

    if (!old_password)
      throw new AppError(
        'É necessário informar a senha antiga para definir uma nova senha'
      )

    if (password && old_password) {
      const checkedOldPassword = await compare(old_password, user.password)

      if (!checkedOldPassword)
        throw new AppError('A senha informada está incorreta.')

      user.password = await hash(password, 8)
    }

    await database.run(
      `UPDATE users SET
    name = ?,
    email= ?,
    password= ?,
    update_at = DATETIME('now')
    WHERE id = ?
    `,
      [user.name, user.email, user.password, id]
    )

    return response.status(200).json()
  }
}

module.exports = UsersController
