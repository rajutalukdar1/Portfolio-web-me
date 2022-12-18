import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Homes from "../components/Homes/Homes";
import ProjectDetails from "../components/Projects/ProjectDetails";
import Projects from "../components/Projects/Projects";
import Skill from "../components/Skills/Skill";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skill></Skill>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/project/:id',
                loader: ({ params }) => fetch(`https://my-portfolio-001.vercel.app/project/${params.id}`),
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

        ]
    }
])

export default router;