import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import MainLayout from './components/MainLayout/MainLayout';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';
import UserDetails from './components/Users/UserDetails';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/Countries/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "/countries",
        element: <Countries />,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/country/:countryId",
        element: <CountryDetails />,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
