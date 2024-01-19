import { ReposAdapter } from '../../adapter/reposAdapter';
import { RepoDTO } from '../../domain/dtos/repo.dto';

export default class ReposController {
  private reposAdapter: ReposAdapter;

  constructor(
    public readonly apiurl: string,
    public readonly username: string
  ) {
    this.reposAdapter = new ReposAdapter();
  }

  async getReposFromRequest(): Promise<any> {
    const reposData = await this.reposAdapter.getRepos(
      this.apiurl,
      this.username
    );

    const formattedRepos = this.formatRepos(reposData);

    return formattedRepos;
  }

  private formatRepos(data: any): RepoDTO[] {
    const repoDTOs: RepoDTO[] = data.map(
      (repo: any) =>
        new RepoDTO(
          repo.id,
          repo.node_id,
          repo.name,
          repo.full_name,
          repo.private,
          repo.owner
        )
    );

    const sortedRepos = repoDTOs.sort((a, b) => b.id - a.id);

    return sortedRepos;
  }
}
