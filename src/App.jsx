import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ServicesPage, ServiceDetailPage } from "./pages/Services";

export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="services" element={<ServicesPage/>}/>
    <Route path="services/:slug" element={<ServiceDetailPage/>}/>
    <Route path="industries" element={<Industries/>}/>
    <Route path="insights" element={<Insights/>}/>
    <Route path="careers" element={<Careers/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes>;
}
