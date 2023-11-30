import express from 'express'
import {login,signup} from '../controllers/userController.js'
import { body } from 'express-validator'

const router  = express.Router();

router.post('/signup',signup)
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 4 }).withMessage('Password must be at least 8 characters long'),
  ],login)

export default router;