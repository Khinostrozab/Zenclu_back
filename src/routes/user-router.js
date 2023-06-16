import routerx from 'express-promise-router';
import UserController from '../controllers/user-controller';

const userRouter = routerx();

userRouter.post('/', UserController.userRegister);
userRouter.post('/login', UserController.userLogin);
userRouter.get('/', UserController.findAllUsers);
userRouter.get('/:id', UserController.findUserById);

export default userRouter;
