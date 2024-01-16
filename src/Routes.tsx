import { lazy } from 'react';
import Auth from './Pages/Auth/Page';
import Page from './Pages/Home/Page';
import { TRoute } from './types/App';

const Page404 = lazy(() => import('./Layout/Ui/NotFoundPage'));

export const routes: TRoute[] = [
  { path: "*", header: "Error Page", element: <Page404 /> },
  { path: "/auth", header: "Sign In", element: <Auth /> },
  { path: "/", header: "Home Page", element: <Page />, withLayout: true }
];



export const AppRoutes: Record<string, string> = Object.fromEntries(
  routes.map((route) => [route.path, route.header])
);
