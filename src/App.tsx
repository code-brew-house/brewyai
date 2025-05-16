import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router";
import { Login } from "./components/Authentication/Login";
import { SignUp } from "./components/Authentication/SignUp";
import { Logout } from "./components/Authentication/Logout";
import { Analysis } from "./components/Analysis";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="*/404" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
