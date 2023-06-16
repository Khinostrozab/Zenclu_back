import routerx from 'express-promise-router';
import categoryRouter from './category-router';
import userRouter from './user-router';
import videoRouter from './video-router';
import courseRouter from './course-router';

const router = routerx();

router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/video', videoRouter);
router.use('/course', courseRouter);

export default router;
