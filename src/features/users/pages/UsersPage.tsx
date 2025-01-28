import { useUsers } from '@/features/users/hooks/useUsers';

export const UsersPage = () => {
  const { users, error, isLoading } = useUsers('agvaldezc@gmail.com');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="page" id="users-page">
      <h1>Users</h1>
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>
    </div>
  );
};