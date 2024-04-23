import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./error-page";
import Administration from "./pages/Administration/Administration";
import Themes from "./pages/Themes/Themes";

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
        { 
          path: "/administration",
          element: <Administration/>,
          children: [
            {path: "/administration/themes", element: <Themes/>}
          ]
        },
      ]
    },
]);

export default router;