import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import History from "./pages/History"
import Compose from "./pages/Compose"
import Error from "./pages/Error"


export const AllRoutes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "history",
                element: <History />,
            },
            {
                path: "compose",
                element: <Compose />,
            }
        ],
    },
]