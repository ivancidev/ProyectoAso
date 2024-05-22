import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import StartUp from "./pages/StartUp/StartUp.jsx";
import Shares from "./pages/Shares/Shares.jsx";
import Identity from "./pages/Identity/Identity.jsx";
import Add from "./pages/Add/Add.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "Start-Up",
        element: <StartUp />,
      },
      {
        path: "Shares",
        element: <Shares />,
      },
      {
        path: "Shares/Edit",
        element: <Edit />,
      },
      {
        path: "Identity",
        element: <Identity />,
      },
      {
        path: "Shares/Add",
        element: <Add />,
      },
    ],
  },
]);

const App = () => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = "Start-Up"; 
  };

  return (
    <React.StrictMode>
      {storedIsLoggedIn ? (
        <RouterProvider router={router} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
};

export default App;
