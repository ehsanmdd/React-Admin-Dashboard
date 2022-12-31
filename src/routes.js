import Home from "./Pages/Home/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"

let routes = [
    {path: "/" , element: <Home />},
    {path: "/users" , element: <UserList />},
    {path: "/newuser" , element: <NewUser />},
    {path: "/products" , element: <Products />},
]

export default routes