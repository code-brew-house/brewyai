import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Login } from "./components/Authentication/Login";
import { SignUp } from "./components/Authentication/SignUp";
import { Logout } from "./components/Authentication/Logout";
import { Analysis } from "./components/Analysis";
import { Home } from "./components/Home";
import { PrivateRoute } from "./components/Authentication/PrivateRoute";
import { RequireAuth } from "./components/Authentication/RequireAuth";
import { Reports } from "./components/Reports";

// Placeholder components for new routes
const Campaigns = () => <h1>Campaigns</h1>;
const Dashboard = () => <h1>Dashboard</h1>;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<PrivateRoute element={<Login />} />} />
        <Route path="/signup" element={<PrivateRoute element={<SignUp />} />} />
        <Route
          path="/logout"
          element={
            <RequireAuth
              element={
                <Layout>
                  <Logout />
                </Layout>
              }
            />
          }
        />

        {/* Product Routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/analysis"
          // element={
          //   <RequireAuth
          //     element={
          //       <Layout>
          //         <Analysis />
          //       </Layout>
          //     }
          //   />
          // }
          //TODO: remove this once we have a proper auth system
          element={
            <Layout>
              <Analysis />
            </Layout>
          }
        />
        <Route
          path="/campaigns"
          element={
            <RequireAuth
              element={
                <Layout>
                  <Campaigns />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/reports"
          // element={
          //   <RequireAuth
          //     element={
          //       <Layout>
          //         <Reports />
          //       </Layout>
          //     }
          //   />
          // }
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />

        {/* Public Routes */}
        <Route
          path="/pricing-plans"
          element={
            <Layout>
              <h1>Pricing & Plans</h1>
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <h1>FAQ</h1>
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <h1>About Us</h1>
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <h1>Terms of Service</h1>
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <h1>Contact Us</h1>
            </Layout>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <Layout>
              <h1>Refund Policy</h1>
            </Layout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <Layout>
              <h1>Terms & Conditions</h1>
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <h1>Privacy Policy</h1>
            </Layout>
          }
        />
        <Route
          path="/sitemap"
          element={
            <Layout>
              <h1>Sitemap</h1>
            </Layout>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <Layout>
              <h1>404 Not Found</h1>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
