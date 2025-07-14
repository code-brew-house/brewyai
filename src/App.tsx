import "./App.css";
import { LoggedInLayout } from "./components/Layout/LoggedInLayout";
import { SiteLayout } from "./components/Layout/SiteLayout";
import { Route, Routes } from "react-router";
import { Login } from "./components/Authentication/Login";
import { SignUp } from "./components/Authentication/SignUp";
import { Logout } from "./components/Authentication/Logout";
import { Analysis } from "./components/Analysis";
import { Home } from "./components/Home";
// import { PrivateRoute } from "./components/Authentication/PrivateRoute";
import { RequireAuth } from "./components/Authentication/RequireAuth";
import { Reports } from "./components/Reports";
import { PricingPlans } from "./components/Pages/PricingPlans";
import { Faq } from "./components/Pages/Faq";
import { AboutUs } from "./components/Pages/AboutUs";
import { TermsConditions } from "./components/Pages/TermsConditions";
import { ContactUs } from "./components/Pages/ContactUs";
import { RefundPolicy } from "./components/Pages/RefundPolicy";
import { TermsOfService } from "./components/Pages/TermsOfService";
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy";
import { StyleGuide } from "./components/Pages/StyleGuide";
import { Page404 } from "./404";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<RequireAuth element={<Logout />} />} />

        {/* Product Routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth
              element={
                <LoggedInLayout>
                  <Dashboard />
                </LoggedInLayout>
              }
            />
          }
        />
        <Route
          path="/analysis"
          element={
            <RequireAuth
              element={
                <LoggedInLayout>
                  <Analysis />
                </LoggedInLayout>
              }
            />
          }
        />
        <Route
          path="/reports"
          element={
            <RequireAuth
              element={
                <LoggedInLayout>
                  <Reports />
                </LoggedInLayout>
              }
            />
          }
        />

        {/* Public Routes */}
        <Route
          path="/pricing-plans"
          element={
            <SiteLayout>
              <PricingPlans />
            </SiteLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <SiteLayout>
              <Faq />
            </SiteLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <SiteLayout>
              <AboutUs />
            </SiteLayout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <SiteLayout>
              <TermsOfService />
            </SiteLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <SiteLayout>
              <ContactUs />
            </SiteLayout>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <SiteLayout>
              <RefundPolicy />
            </SiteLayout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <SiteLayout>
              <TermsConditions />
            </SiteLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <SiteLayout>
              <PrivacyPolicy />
            </SiteLayout>
          }
        />
        <Route
          path="/style-guide"
          element={
            <SiteLayout>
              <StyleGuide />
            </SiteLayout>
          }
        />
        <Route
          path="/sitemap"
          element={
            <SiteLayout>
              <h1>Sitemap</h1>
            </SiteLayout>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <SiteLayout>
              <Page404 />
            </SiteLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
