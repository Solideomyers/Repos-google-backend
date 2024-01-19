import express, { Router } from 'express';
import ReposController from './controller';
import { envs } from '../../config/envs';
import { CustomError } from '../../domain/errors/custom.error';

export class ReposRoutes {
  static get routes(): Router {
    const router = express.Router();
    const reposController = new ReposController(
      envs.API_BASE_URL,
      envs.USER_NAME
    );

    router.get('/repos', async (req, res) => {
      try {
        const repos = await reposController.getReposFromRequest();
        res.json(repos);
      } catch (error) {
        return new CustomError(404, 'Repos not found');
      }
    });

    return router;
  }
}
