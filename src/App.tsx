import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { UsersPage } from './features/users/pages/UsersPage';
import { OrganizationsPage } from './features/organizations/pages/OrganizationsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<div>404</div>}>
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<div>Roles</div>} />
          <Route path="permissions" element={<div>Permissions</div>} />
          <Route path="organizations" element={<OrganizationsPage />} />
          <Route path="projects" element={<div>Projects</div>} />
          <Route path="resources" element={<div>Resources</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
