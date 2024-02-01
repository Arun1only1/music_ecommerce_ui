import MinimumLayout from "../layout/MinimumLayout";
import Login from "../page/Login";
import Register from "../page/Register";

export const guestRoutes = [
  {
    path: "/",
    element: <MinimumLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
