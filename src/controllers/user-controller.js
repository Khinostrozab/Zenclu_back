import httpError from 'http-errors';
import UserService from '../services/user-service';

class UserController {
  static userRegister = async ({ body }, res, next) => {
    const [error, user] = await UserService.userRegister(body);
    if (error) return next(httpError.InternalServerError());
    return res.json(user);
  };

  static userLogin = async ({ body }, res, next) => {
    const [error, user] = await UserService.userLogin(body);
    console.log('body', body);
    console.log('user', user);
    console.log('error', error);
    if (error || !user)
      return next(httpError.BadRequest('Credenciales incorrectas.'));
    return res.json(user);
  };

  static findAllUsers = async (req, res, next) => {
    const [error, users] = await UserService.findAllUsers();
    console.log('error', error);
    if (error) return next(httpError.InternalServerError());
    return res.json(users);
  };

  static findUserById = async ({ params }, res, next) => {
    const [error, user] = await UserService.findUserById(params.id);
    console.log('error', error);
    if (error || !user) return next(this.setNotFoundError(params.id));
    return res.json(user);
  };

  static setNotFoundError = (id) =>
    httpError.NotFound(`resource with id ${id} not found`);
}

export default UserController;
