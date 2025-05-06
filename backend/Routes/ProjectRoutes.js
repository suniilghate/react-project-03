import express from 'express';

import AuthRoute from './AuthRoute.js';

const router = express.Router();
router.use('/auth', AuthRoute); //api/auth

export default router;