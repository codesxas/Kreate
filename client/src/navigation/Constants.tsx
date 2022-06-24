// layouts
import LandingPage from "../templates/layouts/LandingPage";
import Default from "../templates/layouts/Default";
import Cart from "../templates/layouts/Cart";

// pages
import Home from "../templates/pages/Home";
import Category from "../templates/pages/Category";
import NotFound from "../templates/error/NotFound";

export const routes = [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <LandingPage />,
    children: [{ path: "", element: <Home /> }],
  },

  {
    path: "/category",
    element: <Default />,
    children: [{ path: "/:id", element: <Category /> }],
  },

  {
    path: "/cart",
    element: <Cart />,
    children: [
      //   { path: "contact/:id", element: <Contact /> },
      //   { path: "history/:id", element: <History /> },
    ],
  },

  // Not found routes work as you'd expect
  { path: "*", element: <NotFound /> },
];
