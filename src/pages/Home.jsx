import React from "react";

import Layout from "../components/Layout/Layout";
import HomeBanner from "../components/UI/HomeBanner";
import ProductList from '../components/ProductList/ProductList'



const Home = () => {
	return (
		<div>
			<Layout>
				<HomeBanner />
				<ProductList />
			</Layout>
		</div>
	);
};

export default Home;
