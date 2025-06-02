import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Login } from "./components/Authentication/Login";
import { SignUp } from "./components/Authentication/SignUp";
import { Logout } from "./components/Authentication/Logout";
import { Analysis } from "./components/Analysis";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/logout"
          element={
            <Layout>
              <Logout />
            </Layout>
          }
        />
        <Route
          path="/analysis"
          element={
            <Layout>
              <Analysis />
            </Layout>
          }
        />
        <Route
          path="*/404"
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
