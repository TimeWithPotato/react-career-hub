import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import AppliedJobs from './assets/Components/AppliedJobs/AppliedJobs';
import Jobs from './assets/Components/Jobs/Jobs';
import Statistics from './assets/Components/Statistics/Statistics';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage';
import { JobDetails } from './assets/Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../FeaturedJobs.json')
      },
      {
        path: '/jobs',
        element:<Jobs></Jobs>
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/FeaturedJobs/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../FeaturedJobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
