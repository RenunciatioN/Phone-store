import React from "react";
import { MdDelete } from "react-icons/md";

import style from "./CartItem.module.scss";

export const CartItem = ({ id, title, cover, price, removeCartItem, quantity }) => {


	return (
		<div className={style.cartItem}>
			<div className={style.imgWrapp}>
				<img src={"http://localhost:1337" + cover} alt="w" />
			</div>
			<div className={style.itemTitle}>{title}</div>
			<div className={style.itemPrice}>{price}$</div>
			<div className={style.itemPrice}>{quantity}</div>
			<div className={style.itemDelete} onClick={() => removeCartItem(id)}>
				<MdDelete color="#000" />
			</div>
		</div>
	);
};
