import { userModel, IUser } from '../../models';
import { APIError, jwt } from '../../commons';

/**
 *
 * Services
 *
 */

export default {
  /**
   *
   * create user
   *
   */

  async createUser(params: IUser) {
    const { username, email } = params;

    const duplicate = {
      email: await userModel.findOne({ email }),
      username: await userModel.findOne({ username }),
    };

    if (duplicate.username) {
      throw new APIError({
        status: 403,
        message: 'A user with this username already exists',
        path: 'username',
      });
    }

    if (duplicate.email) {
      throw new APIError({
        status: 403,
        message: 'A user with this email already exists',
        path: 'email',
      });
    }

    const user = await userModel.create(params);
    const accessToken = await jwt.encode({ id: user.id });

    return { accessToken, user };
  },
}