import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Single_Product from "./Pages/Single_Product";
import Features from "./Pages/Features";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import About_Page from "./Pages/About_Page";
import Contact from "./Pages/Contact";

function App() {
	return (
		<>
			<BrowserRouter >
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/:id" element={<Single_Product />} />
					<Route path="/features" element={<Features />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="*" element={<Error />} />
					<Route path="/about_page" element={<About_Page />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
