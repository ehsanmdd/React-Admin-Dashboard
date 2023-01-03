import Home from "./Pages/Home/Home"
import UserList from "./Pages/Users/UserList"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import Product from "./Pages/Product/Product"
import FeedBack from "./Pages/FeedBack/FeedBack"
import Mail from "./Pages/Mail/Mail"
import Manage from "./Pages/Manage/Manage"
import Messages from "./Pages/Messages/Messages"
import Reports from "./Pages/Reports/Reports"
import Sale from "./Pages/Sale/Sale"
import SalesAnalytics from "./Pages/SalesAnalytics/SalesAnalytics"
import Transactions from "./Pages/Transactions/Transactions"
import Analytics from "./Pages/Analytics/Analytics"

let routes = [
    {path: "/" , element: <Home />},
    {path: "/users" , element: <UserList />},
    {path: "/newuser" , element: <NewUser />},
    {path: "/products" , element: <Products />},
    {path: "/product/:productID" , element: <Product />},
    {path: "/analytics" , element: <Analytics />},
    {path: "/feedBack" , element: <FeedBack />},
    {path: "/mail" , element: <Mail />},
    {path: "/manage" , element: <Manage />},
    {path: "/messages" , element: <Messages />},
    {path: "/reports" , element: <Reports />},
    {path: "/sale" , element: <Sale />},
    {path: "/salesanalytics" , element: <SalesAnalytics />},
    {path: "/transactions" , element: <Transactions />},
]

export default routes