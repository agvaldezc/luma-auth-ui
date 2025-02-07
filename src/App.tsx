import Layout from '@/components/Layout';
import OrganizationPage from '@/features/organizations/pages/OrganizationPage';
import OrganizationsPage from '@/features/organizations/pages/OrganizationsPage';
import { UsersPage } from '@/features/users/pages/UsersPage';
import { BrowserRouter, Route, Routes } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<div>404</div>}>
          <Route index element={<div>Index Element</div>} />
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<div>Roles</div>} />
          <Route path="permissions" element={<div>Permissions</div>} />
          <Route path="organizations" element={<OrganizationsPage />} />
          <Route path="organizations/:id" element={<OrganizationPage />} />
          <Route path="projects" element={<div>Projects</div>} />
          <Route path="resources" element={<div>Resources</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
