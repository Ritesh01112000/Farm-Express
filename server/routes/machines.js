import {getMachines, getRenters} from '../controllers/machinesController.js'
import express from 'express'
import authenticateToken from '../middleware/jwtMiddleware.js';
import {param} from 'express-validator'

const router = express.Router();

router.get('/all',getMachines);
router.get('/getRenters/:machineName',[
    param('machineName').isLength({ min: 4 }).withMessage('MachineName should be minimum 4 char'),
],getRenters)


export default router;