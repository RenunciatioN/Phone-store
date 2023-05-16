import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";



function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registration" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product/:id" element={<Product />} />
			</Routes>
		</div>
	);
}

export default App;
