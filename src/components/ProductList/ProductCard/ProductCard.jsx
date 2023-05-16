import React from "react";
import style from "./ProductCard.module.scss";

const ProductCard = ({ title, price, cover }) => {
	return (
		<div className={style.card}>
			<div className={style.title}>{title}</div>
			<img
				src={"http://localhost:1337" + cover?.data?.attributes?.url}
				width={240}
				height={200}
				alt="iphone"
			/>
			<div className={style.buy}>
				<div className={style.price}>{price} $</div>
				<div className={style.btn}>Buy</div>
			</div>
			<div className={style.label}>Take a closer look</div>
		</div>
	);
};

export default ProductCard;
