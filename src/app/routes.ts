import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import InnovationLab from "../pages/InnovationLab";
import Projects from "../pages/Projects";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,            Component: Home },
      { path: "about",          Component: About },
      { path: "programs",       Component: Programs },
      { path: "innovation-lab", Component: InnovationLab },
      { path: "projects",       Component: Projects },
      { path: "partners",       Component: Partners },
      { path: "contact",        Component: Contact },
      { path: "*",              Component: NotFound },
    ],
  },
]);
