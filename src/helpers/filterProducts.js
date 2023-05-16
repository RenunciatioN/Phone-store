const filterProducts = (items, itemSort) => {
	if (!items) return;
	if (itemSort === "All") return items?.data;
	const sortedProducts = items?.data.filter(
		(prod) => prod?.attributes?.category?.data?.attributes?.name === itemSort
	);

	return sortedProducts;
};

export default filterProducts