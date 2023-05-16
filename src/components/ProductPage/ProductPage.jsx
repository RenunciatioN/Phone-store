import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { nanoid } from 'nanoid'

import IsFavorite from "./IsFavorite/IsFavorite";
import ProductSlider from "./ProductSlider/ProductSlider";
import { useCartStore } from "../../store/cartStore";

import style from "./ProductPage.module.scss";

const SliderWrapp = styled.div`
	position: relative;
	max-width: 1400px;
	padding: 0 100px;
	margin: 0 auto;
`;

const ProductPage = () => {
	const { state } = useLocation();
	const addToCart = useCartStore(state => state.addToCart)

	const product = state.product.attributes;

	const objectProduct = {
		id: state.product.id,
		title: state.product.attributes.title,
		cover: state.product.attributes.cover.data.attributes.url,
		price: state.product.attributes.price,
	}

	
	return (
		<div className={style.productPage}>
			<div className={style.pageTop}>
				<h1 className={style.title}>{product.title}</h1>
				<IsFavorite state={state} />
			</div>
			<SliderWrapp>
				<ProductSlider product={state} />
			</SliderWrapp>
			<div className={style.shopping}>
				<div className={style.price}>
					<span>price: </span>
					{product.price} $
				</div>
				<button onClick={() => addToCart(objectProduct)}>Buy</button>
			</div>

			<div className={style.description}>{product.description}</div>
			<div></div>
		</div>
	);
};

export default ProductPage;
