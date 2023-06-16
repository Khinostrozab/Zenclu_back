import User from '../models/entity/user';
import { promisseHandler } from '../utils/promisse-handler';

class UserService {
  static userRegister = async (user) => promisseHandler(User.create(user));

  static findAllUsers = async () =>
    promisseHandler(User.find({}).select(['-createdAt', '-updatedAt']));

  static findUserById = async (id) =>
    promisseHandler(
      User.findOne({ _id: id }).select(['-createdAt', '-updatedAt'])
    );

  static userLogin = async ({ email, password }) =>
    promisseHandler(
      User.findOne({ email, password }).select(['-createdAt', '-updatedAt'])
    );
}

export default UserService;
