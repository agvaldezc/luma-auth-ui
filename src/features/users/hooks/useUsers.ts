import useSWR from 'swr';

export const useUsers = (email: string) => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(`http://localhost:8080/api/v1/users/${email}`, {
    shouldRetryOnError: false,
  });

  return { users, error, isLoading };
};
