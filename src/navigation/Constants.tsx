// layouts
import { Cart, Default, LandingPage } from "../templates/layouts";

// pages
import { Home, Category, Pdp } from "../templates/pages";
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
    children: [
      {
        path: "",
        element: <Category />,
        // children: [{ path: "product", element: <Pdp /> }],
      },
      { path: ":id", element: <Category props={{ page: "Cart" }} /> },
      { path: "product", element: <Pdp props={{ page: "Cart" }} /> },
    ],
  },

  {
    path: "/cart",
    element: <Cart props={{ page: "Cart" }} />,
    children: [
      //   { path: "contact/:id", element: <Contact /> },
      //   { path: "history/:id", element: <History /> },
    ],
  },

  // Not found routes work as you'd expect
  { path: "*", element: <NotFound /> },
];
