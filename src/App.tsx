import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowcasePage from "./components/ShowcaseSection"; // ✅ add this
// import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/showcase" element={<ShowcasePage />} /> 
      </Routes>

      <Footer />
      {/* <Toaster /> */}
    </BrowserRouter>
  );
}
