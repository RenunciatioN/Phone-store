import React from "react";
import styled from "styled-components";

import Layout from "./../components/Layout/Layout";
import ProductPage from "../components/ProductPage/ProductPage";



const Wrapper = styled.div`
	padding: 40px;
`;

const Product = () => {


	return (
		<Layout>
			<Wrapper>
				<ProductPage />
			</Wrapper>
		</Layout>
	);
};

export default Product;
