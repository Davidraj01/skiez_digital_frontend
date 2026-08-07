import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasCursor from "./components/Cursor";
import ScrollTop from "@/components/ui/ScrollTop";
import { AuthProvider } from "./admin/AuthContext";
import ProtectedRoute from "./admin/ProtectedRoute";

// ✅ Import Toaster
import { Toaster } from "react-hot-toast";

// Lazy-loaded routes
const Services = React.lazy(() => import("./pages/Services"));
// Blog is taken down for now — kept here (commented) for when it's restored.
// const Blog = React.lazy(() => import("./pages/Blog"));
const BlogGone = React.lazy(() => import("./pages/BlogGone"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const WebDevelopment = React.lazy(() => import("./pages/services/WebDevelopment"));
const UiUxDesign = React.lazy(() => import("./pages/services/UiUxDesign"));
const MobileApps = React.lazy(() => import("./pages/services/MobileApps"));
const SeoMarketing = React.lazy(() => import("./pages/services/DigitalMarketing"));
const Seo = React.lazy(() => import("./pages/DigitalMarketing/Seo"));
const EmailMarketing = React.lazy(() => import("./pages/DigitalMarketing/EmailMarketing"));
const ContentMarketing = React.lazy(() => import("./pages/DigitalMarketing/ContentMarketing"));
const SocialMediaMarketing = React.lazy(() => import("./pages/DigitalMarketing/SocialMediaMarketing"));
const MetaAds = React.lazy(() => import("./pages/DigitalMarketing/MetaAds"));
const GoogleCampign = React.lazy(() => import("./pages/DigitalMarketing/GoogleCampign"));
const Careers = React.lazy(() => import("./pages/Careers"));
const Privacy = React.lazy(() => import("@/pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
// const BlogPost = React.lazy(() => import("./pages/BlogPost"));

// Admin panel
const AdminLogin = React.lazy(() => import("./admin/Login"));
const AdminLayout = React.lazy(() => import("./admin/AdminLayout"));
const AdminDashboard = React.lazy(() => import("./admin/Dashboard"));
const AdminWorks = React.lazy(() => import("./admin/WorksManager"));
const AdminBlog = React.lazy(() => import("./admin/BlogManager"));
const AdminBlogEditor = React.lazy(() => import("./admin/BlogEditor"));
const AdminSocial = React.lazy(() => import("./admin/SocialManager"));
const AdminApplications = React.lazy(() => import("./admin/ApplicationsList"));
const AdminContact = React.lazy(() => import("./admin/ContactMessages"));

// Minimal loading indicator to avoid layout jumps
const PageLoader = () => (
  <div className="flex justify-center items-center py-32 min-h-[50vh]">
    <div className="w-8 h-8 rounded-full animate-spin border-4 border-slate-200 border-t-teal-500"></div>
  </div>
);

function PublicSite() {
  return (
    <>
      <ScrollTop />
      <CanvasCursor />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          containerStyle={{ top: "90px" }} // <--- moves toast below navbar
          toastOptions={{
            duration: 3500,
            style: {
              zIndex: 999999, // <--- stays on top visually
              borderRadius: "10px",
            },
          }}
        />

        <AuthProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<PublicSite />}>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/ui-ux" element={<UiUxDesign />} />
                <Route path="/services/mobile-apps" element={<MobileApps />} />
                <Route path="/services/seo-marketing" element={<SeoMarketing />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<BlogGone />} />
                <Route path="/blog/:slug" element={<BlogGone />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/digital-marketing/seo" element={<Seo />} />
                <Route path="/services/digital-marketing/email-marketing" element={<EmailMarketing />} />
                <Route path="/services/digital-marketing/content-marketing" element={<ContentMarketing />} />
                <Route path="/services/digital-marketing/social-media" element={<SocialMediaMarketing />} />
                <Route path="/services/digital-marketing/meta-ads" element={<MetaAds />} />
                <Route path="/services/digital-marketing/google-campaigns" element={<GoogleCampign />} />
              </Route>

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="works" element={<AdminWorks />} />
                <Route path="blog" element={<AdminBlog />} />
                <Route path="blog/:id" element={<AdminBlogEditor />} />
                <Route path="social" element={<AdminSocial />} />
                <Route path="applications" element={<AdminApplications />} />
                <Route path="contact" element={<AdminContact />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
