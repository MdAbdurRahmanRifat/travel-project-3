import { createBrowserRouter } from "react-router-dom";


import About from "../pages/About/About";
import Blogsection from "../pages/Blog/Blogsection";
import Carddetails from "../pages/Card/Carddetails/Carddetails";
import Mainlayout from "../pages/Main-Layout/Mainlayout";

import Card from "../pages/Card/Card";
import Home from "../pages/Home/Home";
import Multicard from "../pages/Card/Multicard/Multicard";



const mycreatedRoute = createBrowserRouter([
   {
    path : '/',
    element :<Mainlayout/>,
    children :[
        {
            path : '/',
            element: <Home/>
        },
        {
            path : '/about',
            element: <About/>
        },
        {
            path : '/blog',
            element: <Blogsection/>
        },
        {
            path : '/our work',
            element: <Card/>
        },
        {
            path : '/details',
            element:<Carddetails/>
        },
        {
            path :'/multicard',
            element:<Multicard/>
         }
    ]
   }
]);

export default mycreatedRoute;