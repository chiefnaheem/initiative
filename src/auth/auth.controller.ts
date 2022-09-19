import { Request, Response, NextFunction } from 'express';
import { APIresponse } from '../../commons';
import service from './service';

/**
 *
 * controllers
 *
 */

export default {
  /**
   *
   * create user
   *
   */

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const data = await service.createUser(payload);

      APIresponse(res, 201, 'User created', data);
    } catch (error) {
      next(error);
    }
  },
}