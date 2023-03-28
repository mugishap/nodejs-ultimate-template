import express from 'express'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
import authController from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/login', authController.login)
authRouter.post('/initiate-password-reset', authController.initiatePasswordReset)
authRouter.post('/reset-password', authController.resetPassword)
authRouter.get('/initiate-email-verification', isLoggedIn, authController.initiateEmailVerification)
authRouter.post('/verify-email', isLoggedIn, authController.verifyEmail)

export default authRouter