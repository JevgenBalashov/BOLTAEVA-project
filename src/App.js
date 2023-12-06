import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/Login/Login";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
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