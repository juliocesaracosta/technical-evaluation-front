import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./error-page";
import Administration from "./pages/Administration/Administration";

import {
    createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children:[
        { path: "/profile", element: <Profile/> },
        { path: "/administration", element: <Administration/> },
      ]
    },
]);

export default router;