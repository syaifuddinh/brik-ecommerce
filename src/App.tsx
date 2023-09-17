import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "pages/home"
import LoginPage from "pages/login"
import RegistrationPage from "pages/registration"
import CreatingProductPage from "pages/product/create";
import ShowingProductPage from "pages/product/show";
import AuthProtected from "layouts/auth.protected";
import AuthForbidden from "layouts/auth.forbidden";
import "assets/css/index.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProtected children={<HomePage />} />,
  },
  {
    path: "/login",
    element: <AuthForbidden children={<LoginPage />} />,
  },
  {
    path: "/registration",
    element: <AuthForbidden children={<RegistrationPage />} />,
  },
  {
    path: "/product/create",
    element:<AuthProtected children={<CreatingProductPage />} />,
  },
  {
    path: "/product/:id",
    element:<AuthProtected children={<ShowingProductPage />} />,
  }
]);

const App = () => {
    return (
            <>
                <RouterProvider router={router} />
            </>
    )
}

export default App;