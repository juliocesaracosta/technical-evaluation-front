import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./error-page";
import Administration from "./pages/Administration/Administration";
import Themes from "./pages/Themes/Themes";
import Login from "./pages/Login/Login";

import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Register from "./pages/Login/Register";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children:[
        { 
          path: "/",
          element: <Home/>
        },
        { 
          path: "/administration/themes",
          element: <Themes/>
        },
        { 
          path: "/administration",
          element: <Administration/>
        },
      ]
    },
    { 
      path: "/login",
      element: <Login/>
    },
    { 
      path: "/register",
      element: <Register/>
    }
]);

export default router;