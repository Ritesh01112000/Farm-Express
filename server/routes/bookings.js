import { PostBookings,getBookings } from '../controllers/bookingsController.js';
import express from 'express'
import authenticateToken from '../middleware/jwtMiddleware.js';
import {param} from 'express-validator'

const router = express.Router();

router.post('/booking-details',authenticateToken,PostBookings);
router.get('/getbookings/:emailid',[
    param('email').isEmail().withMessage('Invalid email address'),
],authenticateToken,getBookings);

export default router;