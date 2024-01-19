import axios from 'axios';
import { CustomError } from '../domain/errors/custom.error';
import { Repos } from '../domain/errors/interfaces/interface-repos';

export class ReposAdapter {
  async getRepos(apiUrl: string, username: string): Promise<Repos[]> {
    console.log(apiUrl, username);
    try {
      const response = await axios.get(
        `${apiUrl}${username}/repos?sort=stars&per_page=10`
      );
      return response.data;
    } catch (error) {
      throw new CustomError(404, 'Error fetching GitHub repositories');
    }
  }
}
