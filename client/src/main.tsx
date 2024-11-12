import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { StrictMode } from 'react';

import App from './App.tsx';
import SeriesPage from './pages/SeriesPage.tsx';
import ComicsPage from './pages/ComicsPage.tsx';
import EventsPage from './pages/EventsPage.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
// import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
// Create router to add pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/series',
        element: <SeriesPage />,
      },
      {
        path: '/events', 
        element: <EventsPage />,
      },
      {
        path: '/comics', 
        element: <ComicsPage/>,
      }, 
      {
        path: '/favorites', 
        element: <FavoritesPage />,
      }
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>

  <RouterProvider router={router} />
  </StrictMode>);
}
