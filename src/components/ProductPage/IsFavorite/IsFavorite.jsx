import React, { useEffect, useState } from "react";

import { IconContext } from "react-icons";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useUserFavorites } from "../../../store/authStore";

const IsFavorite = ({ state }) => {
	const [activeFavorite, setActiveFavorite] = useState(false);
	const addToFavorite = useUserFavorites((state) => state.addToFavorite);
	const removeToFavorite = useUserFavorites(
		(state) => state.removeToFavorite
	);
	const favoriteList = useUserFavorites((state) => state.favoriteList);
	const productID = state.product.id;

	useEffect(() => {
		if (favoriteList.includes(productID)) setActiveFavorite(true);
	}, []);

	const addFavorites = () => {
		setActiveFavorite(!activeFavorite);
		if (favoriteList.includes(productID)) {
			removeToFavorite(productID);
		} else {
			addToFavorite(productID);
		}
	};

	return (
		<div onClick={() => addFavorites()} style={{ cursor: "pointer" }}>
			<IconContext.Provider
				value={{
					color: "red",
					size: 26,
				}}
			>
				<div>{activeFavorite ? <BsHeartFill /> : <BsHeart />}</div>
			</IconContext.Provider>
		</div>
	);
};

export default IsFavorite;
