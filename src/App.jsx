import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Works from "./Pages/Works/Works";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Header/Footer";
import Work from "./Pages/Work/Work";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./Components/ScrollToTop"; // Make sure this is imported
import BrivacyPage from "./Pages/privacy-policy/BrivacyPage";
import WepSerivceApi from "./_Service/Setting";
import Terms from "./Components/Terms/Terms";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Helmet } from "react-helmet";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Search from "./Pages/Search/Search";

function App() {
  const { t } = useTranslation();
  const { data, loading } = WepSerivceApi();

  // Show a loading spinner while the data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader />
      </div>
    );
  }

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Router>
        {/* SEO meta tags for the page */}
        <Helmet>
          <title>{data?.SEO.title || 'Moayed'}</title>
          <meta name="description" content={data?.SEO.description || 'Default description'} />
          <meta name="keywords" content={data?.SEO.keywords || 'default, keywords'} />
        </Helmet>

        <Navbar />
        <ScrollToTop /> {/* Ensure ScrollToTop is included here */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:WorkId" element={<Work />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:blogid" element={<SingleBlog />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/privacy-policy" element={<BrivacyPage />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
