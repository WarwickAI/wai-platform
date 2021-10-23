import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Landing from './pages/Landing';
import User from './pages/User';
import NotFound from './pages/Page404';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Talks from './pages/Talks';
import Talk from './pages/Talk';
import Project from './pages/Project';
import TestLambda from './pages/TestLambda';
import Blog from './pages/Blog';
import Events from './pages/Events';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" replace /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'courses/:shortName', element: <Course /> },
        { path: 'courses', element: <Courses /> },
        { path: 'talks', element: <Talks /> },
        { path: 'talks/:shortName', element: <Talk /> },
        { path: 'user', element: <User /> },
        { path: 'projects/:id', element: <Project /> },
        { path: 'projects', element: <Projects /> },
        { path: 'testLambda', element: <TestLambda /> }
        { path: 'blog', element: <Blog /> },
        { path: 'events', element: <Events /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: 'home', element: <Landing /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
