import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),

  API_BASE_URL: get('API_BASE_URL').required().asString(),

  USER_NAME: get('USER_NAME').required().asString(),
};
