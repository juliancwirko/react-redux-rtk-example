import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GithubUser, GithubRepo } from '../types';

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<{ items: GithubUser[] }, string>({
      query: (query) =>
        `search/users?q=${encodeURIComponent(query)}&per_page=5`,
    }),
    getReposByUsername: builder.query<
      GithubRepo[],
      { username: string; page: number }
    >({
      query: ({ username, page = 1 }) =>
        `users/${encodeURIComponent(
          username
        )}/repos?per_page=5&sort=updated&page=${encodeURIComponent(page)}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useGetReposByUsernameQuery } = githubApi;
