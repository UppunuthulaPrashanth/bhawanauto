import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About_us from "./pages/About_us";
import Blogs from "./pages/Blogs";
import Contact_us from "./pages/Contact_us";
import Gallery from "./pages/Gallery";
import Get_quote from "./pages/Get_quote";
import Packages from "./pages/Packages";
import Privacy_policy from "./pages/Privacy_policy";
import Services from "./pages/Services";
import Terms_conditions from "./pages/Terms_conditions";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="about" element={<About_us/>}/>
            <Route exact path="blog" element={<Blogs/>}/>
            <Route exact path="contact-us" element={<Contact_us/>}/>
            <Route exact path="gallery" element={<Gallery/>}/>
            <Route exact path="get-quote" element={<Get_quote/>}/>
            <Route exact path="packages" element={<Packages/>}/>
            <Route exact path="privacy-policy" element={<Privacy_policy/>}/>
            <Route exact path="services" element={<Services/>}/>
            <Route exact path="terms-and-conditions" element={<Terms_conditions/>}/>
          </Routes>
        </Layout>
      </Router>
        
    </div>
  );
}

export default App;
