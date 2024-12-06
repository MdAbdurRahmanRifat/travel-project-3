import { createBrowserRouter } from "react-router-dom";


import About from "../pages/About/About";
import Blogsection from "../pages/Blog/Blogsection";
import Carddetails from "../pages/Card/Carddetails/Carddetails";
import Mainlayout from "../pages/Main-Layout/Mainlayout";
import Herosection from "../pages/Hero/Herosection";
import Card from "../pages/Card/Card";



const mycreatedRoute = createBrowserRouter([
   {
    path : '/',
    element :<Mainlayout/>,
    children :[
        {
            path : '/',
            element: <Herosection/>
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
        }
    ]
   }
]);

export default mycreatedRoute;