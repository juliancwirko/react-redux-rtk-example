export interface GithubUser {
  login: string;
  id: string;
}

export interface GithubRepo {
  id: string;
  stargazers_count: number;
  name: string;
  description: string;
}
