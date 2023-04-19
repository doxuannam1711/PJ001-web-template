import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Team from "./pages/Team";
// import Blog from "./pages/Blog";
// import Jobs from "./pages/Jobs";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import SOCaaS from "./pages/SOCaaS";
// import Impressum from "./pages/Impressum";
// import Datenschutz from "./pages/Datenschutz";

export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/team",
    //     element: <Team />,
    // },
    // {
    //     path: "/blog",
    //     element: <Blog />,
    // },
    // {
    //     path: "/jobs",
    //     element: <Jobs />,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // },
    // {
    //     path: "/services",
    //     element: <Services />,
    // },
    // {
    //     path: "/soc-features",
    //     element: <SOCaaS />
    // },
    // {
    //     path: "/impressum",
    //     element: <Impressum />
    // },
    // {
    //     path: "/datenschutz",
    //     element: <Datenschutz />
    // }
])