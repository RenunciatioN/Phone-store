import React, { useEffect, useRef, useState } from "react";

import { RxCube } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { CartItem } from "./CartItem/CartItem";
import { useCartStore } from "../../store/cartStore";

import style from "./Cart.module.scss";

const Cart = () => {
	const ref = useRef(null);
	const cartItems = useCartStore((state) => state.cartItems);
	const [isOpen, setIsOpen] = useState(false);
	const removeCartItem = useCartStore((state) => state.removeItem);
	const [totalAmount, setTotalAmount] = useState(null);

	const cartOpenHandler = () => {
		if (ref) ref.current.style.transform = "translateX(0%)";
		setIsOpen(true);
	};
	const cartCloseHandler = () => {
		if (ref) ref.current.style.transform = "translateX(100%)";
		setIsOpen(false);
	};

	const totalSum = () => {
		let sum = 0;
		cartItems.forEach((item) => (sum = sum + item.price));
		setTotalAmount(sum);
	};

	useEffect(() => {
		totalSum();
	}, [cartItems]);

	return (
		<div className={style.cart}>
			<div
				className={style.cartPreview}
				onClick={() => cartOpenHandler()}
			>
				<RxCube size={20} />
				<span>Cart</span>
			</div>

			<div className={style.cartBody} ref={ref}>
				<div className={style.cartTop}>
					<div className={style.cartTitle}>Cart</div>
					<div
						className={style.cartClose}
						onClick={() => cartCloseHandler()}
					>
						<VscChromeClose color="#fff" size={26} />
					</div>
				</div>
				<div className={style.cartItemsWrapp}>
					{isOpen && cartItems && cartItems.length !== 0 ? (
						cartItems.map((item) => (
							<CartItem
								key={item.id}
								{...item}
								removeCartItem={removeCartItem}
							/>
						))
					) : (
						<div
							style={{
								textAlign: "center",
								fontSize: "20px",
								color: "#ffff",
								zIndex: 99,
							}}
						>
							Cart is empty :(
						</div>
					)}
				</div>

				{cartItems.length !== 0 && (
					<>
						<div>Total: {totalAmount} $</div>
						<div className={style.pay}>Move to payment</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Cart;
