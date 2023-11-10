import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainSection from "./pages/MainPage/MainPage";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainSection />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;