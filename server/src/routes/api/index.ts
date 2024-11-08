import { Router } from 'express';
import { userRouter } from './user-routes.js';
import marvelRouter from './marvel-route.js';

const router = Router();

router.use('/users', userRouter);
router.use('/marvel', marvelRouter);
export default router;
