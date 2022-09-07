const Router = require('express')

const router = Router()

const userRouter = require('./users.routes')
const noteRouter = require('./notes.routes')
const tagRouter = require('./tags.routes')
const sessionsRouter = require('./sessions.routes')

router.use('/users', userRouter)
router.use('/sessions', sessionsRouter)
router.use('/notes', noteRouter)
router.use('/tags', tagRouter)
module.exports = router
