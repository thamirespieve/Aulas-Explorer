const Router = require('express')
const multer = require('multer')

const UsersController = require('../controllers/UsersController')
const UserAvatarController = require('../controllers/UserAvatarController')

const ensureAuthenticated = require('../middleware/ensureAuthenticated')
const uploadConfig = require('../configs/upload')

const userRouter = Router()

const usersController = new UsersController()
const usersAvatarController = new UserAvatarController()

const upload = multer(uploadConfig.MULTER)

userRouter.post('/', usersController.create)
userRouter.put('/', ensureAuthenticated, usersController.update)
userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update
)

module.exports = userRouter
