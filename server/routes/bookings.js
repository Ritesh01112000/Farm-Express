import { PostBookings,getBookings } from '../controllers/bookingsController.js';
import express from 'express'
import authenticateToken from '../middleware/jwtMiddleware.js';
import {param} from 'express-validator'

const router = express.Router();

router.post('/booking-details',PostBookings);
router.get('/getbookings/:emailid',[
    param('email').isEmail().withMessage('Invalid email address'),
],getBookings);

export default router;