import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://raw.githubusercontent.com/taposroy1/Donation.json/main/donation.json-main/donation.json-main/donation.json')
            },
            {
                path: "/donations",
                element: <Donation></Donation>
            }, 
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('https://raw.githubusercontent.com/taposroy1/Donation.json/main/donation.json-main/donation.json-main/donation.json')
            },
            {
                path: `/donation/:id`,
                element: <Card></Card>,
                loader: () => fetch('https://raw.githubusercontent.com/taposroy1/Donation.json/main/donation.json-main/donation.json-main/donation.json')
            }
        ]
    }
]) 

export default myCreatedRoute;