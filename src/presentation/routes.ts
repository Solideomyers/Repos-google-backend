import { Router } from 'express';
import { ReposRoutes } from './repos/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use('/', ReposRoutes.routes);

    return router;
  }
}
