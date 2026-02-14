import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Products from "./page/Products";
import Support from "./page/Support";
import ProductDetail from "./page/ProductDetail";

export default function App(){
    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:productId" element={<ProductDetail/>}/>
                <Route path="/support" element={<Support/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}