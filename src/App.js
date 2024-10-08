import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import SectionHeader from './components/SectionHeader';
import LoginForm from './components/LoginForm';
import { Route, Routes, BrowserRouter, Navigate, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import { validationToken } from './helpers/token';
import UserLogueado from './rutas/UserLogueado';
import { AuthProvider } from './auth/AuthProvider';
import Registro from './pages/Registro/Registro';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './pages/Users/Users';
import UserAdmin from './rutas/UserAdmin';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import UploadReteIVA from './pages/UploadReteIVA/UploadReteIVA';
import Dashboard from './pages/DashBoard/DashBoard';
import ExportCertificate from './pages/Export/ExportCertificate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/signup",
    element: <Registro />
  },
  {
    path: "/users",
    element: <Users />
  },
  {
    path: "/changePassword",
    element: <ChangePassword />
  },
  {
    path: "/",
    element: <UserLogueado />,
    children: [
      {
        path: "/my/home",
        element: <Home renderElement={<Dashboard />}></Home>
      },
      {
        path: "/my/home/export",
        element: <Home renderElement={<ExportCertificate />}></Home>
      },
      {
        path: "/admin",
        element: <UserAdmin />,
        children: [
          {
            path: "/admin/users",
            element: <Home renderElement={<Users />}></Home>
          },
          {
            path: "/admin/upload",
            element: <Home renderElement={<UploadReteIVA />}></Home>
          },
        ]
      }
    ]
  }
])

function App() {

  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );

}

export default App;

