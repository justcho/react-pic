import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const History = lazy(() => import("./pages/History"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
