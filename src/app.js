import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";

const Galery = lazy(() => import("./pages/Galery"));
const Inicio = lazy(() => import("./home/Inicio"));
const Ecosistemas = lazy(() => import("./pages/Ecosistemas"));
const Proyectos = lazy(() => import("./pages/Projects"));
const GaleryEcosistemas = lazy(() => import("./pages/GaleryEcosistemas"));
const GaleryProjects = lazy(() => import("./pages/GaleryProjects"));


const Contact = lazy(() => import("./pages/Contact"));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ecosistemas" element={<Ecosistemas />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/galeria" element={<Galery />} />
          <Route path="/eco_galery" element={<GaleryEcosistemas />} />
          <Route path="/pro-galery" element={<GaleryProjects />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
