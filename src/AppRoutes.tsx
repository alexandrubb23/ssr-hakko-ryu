import { Route, Routes } from 'react-router-dom';
import { pages } from './pages';
import App from './App';

interface AppRoutesProps {
  initialLoaderData: any;
}

export const AppRoutes = ({ initialLoaderData }: AppRoutesProps) => {
  return (
    <Routes>
      <Route element={<App />}>
        {pages.map(({ path, component: Component }, index) => (
          <Route
            key={path}
            path={path}
            index={index === 0}
            element={<Component data={initialLoaderData} />}
          />
        ))}
      </Route>
    </Routes>
  );
};
