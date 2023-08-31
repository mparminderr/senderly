import {
    createBrowserRouter,

} from "react-router-dom";
import Homepage from "../Pages/Homepage";
const routes = createBrowserRouter([{
    path:'/',
    element:<Homepage />
}])
export {routes}