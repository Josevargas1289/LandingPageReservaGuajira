import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";

const HomeThree = lazy(() => import("./home/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const GaleryEcosistemas = lazy(() => import("./pages/GaleryEcosistemas"));
const GaleryProjects = lazy(() => import("./pages/GaleryProjects"));


// const ServiceDetailsLeftSidebar = lazy(() =>
//   import("./service/ServiceDetailsLeftSidebar")
// );
// const ServiceDetailsRightSidebar = lazy(() =>
//   import("./service/ServiceDetailsRightSidebar")
// );
const Projects = lazy(() => import("./project/Projects"));
// const ProjectDetails = lazy(() => import("./project/ProjectDetails"));
// const BlogLeftSidebar = lazy(() => import("./blog/BlogLeftSidebar"));
// const BlogRightSidebar = lazy(() => import("./blog/BlogRightSidebar"));
// const BlogDetailsLeftSidebar = lazy(() =>
//   import("./blog/BlogDetailsLeftSidebar")
// );
// const BlogDetailsRightSidebar = lazy(() =>
//   import("./blog/BlogDetailsRightSidebar")
// );
const Contact = lazy(() => import("./pages/Contact"));
// const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="/ecosistemas" element={<About />} />
          <Route path="/proyectos" element={<Services />} />
          {/* <Route
            path="/service-details-left-sidebar"
            element={<ServiceDetailsLeftSidebar />}
          />
          <Route
            path="/service-details-right-sidebar"
            element={<ServiceDetailsRightSidebar />}
          /> */}
          <Route path="/galeria" element={<Projects />} />
          <Route path="/eco_galery" element={<GaleryEcosistemas/>} />
          <Route path="/pro-galery" element={<GaleryProjects/>} />

          {/* <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route
            path="/blog-details-left-sidebar"
            element={<BlogDetailsLeftSidebar />}
          /> */}
          {/* <Route
            path="/blog-details-right-sidebar"
            element={<BlogDetailsRightSidebar />}
          /> */}
          <Route path="/contact-us" element={<Contact />} />
          {/* <Route path="*" element={<NoMAtch />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
