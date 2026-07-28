// src/router.jsx

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Services – main
import WebDevelopment from "./pages/services/WebDevelopment";
import UiUx from "./pages/services/UiUx";
import MobileApps from "./pages/services/MobileApps";
import SeoMarketing from "./pages/services/SeoMarketing";

// Digital marketing sub-pages
import Seo from "./pages/services/digital-marketing/Seo";
import EmailMarketing from "./pages/services/digital-marketing/EmailMarketing";
import ContentMarketing from "./pages/services/digital-marketing/ContentMarketing";
import SocialMedia from "./pages/services/digital-marketing/SocialMedia";
import MetaAds from "./pages/services/digital-marketing/MetaAds";
import GoogleCampaigns from "./pages/services/digital-marketing/GoogleCampaigns";

export const routes = [
  { path: "/", element: <Home /> },

  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/careers", element: <Careers /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },

  // Services pages
  { path: "/services/web-development", element: <WebDevelopment /> },
  { path: "/services/ui-ux", element: <UiUx /> },
  { path: "/services/mobile-apps", element: <MobileApps /> },
  { path: "/services/seo-marketing", element: <SeoMarketing /> },

  // Digital marketing sub-pages
  { path: "/services/digital-marketing/seo", element: <Seo /> },
  {
    path: "/services/digital-marketing/email-marketing",
    element: <EmailMarketing />,
  },
  {
    path: "/services/digital-marketing/content-marketing",
    element: <ContentMarketing />,
  },
  {
    path: "/services/digital-marketing/social-media",
    element: <SocialMedia />,
  },
  {
    path: "/services/digital-marketing/meta-ads",
    element: <MetaAds />,
  },
  {
    path: "/services/digital-marketing/google-campaigns",
    element: <GoogleCampaigns />,
  },
];
