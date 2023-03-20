import { Router } from 'express';
import { authMiddleware } from '../../middleware/auth.middleware';
import authController from '../../controllers/auth.contoller';
import { asyncWrapper } from '../../middleware/asyncWrapper';
import userValidation from '../../middleware/user.validation';

const authRouter: Router = Router();

authRouter.post(
  '/register',
  userValidation,
  asyncWrapper(authController.register.bind(authController))
);
authRouter.post('/login', asyncWrapper(authController.login.bind(authController)));
authRouter.put(
  '/reset-password',
  authMiddleware,
  asyncWrapper(authController.resetPassword.bind(authController))
);
authRouter.post('/user', asyncWrapper(authController.getUserByEmail.bind(authController)));

export default authRouter;
