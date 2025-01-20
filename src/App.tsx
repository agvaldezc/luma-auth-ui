import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ROUTES } from './constants/routes';

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<div>404</div>}>
          {ROUTES.map((route) => {
            return (
              <Route
                path={route.href}
                element={<div>{route.title}</div>}
                key={route.href}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
