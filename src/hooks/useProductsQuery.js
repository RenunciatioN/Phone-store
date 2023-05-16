import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../services/products.servises";

const useProductsQuery = (page, query = "all") => {
	
	if (query.toLowerCase() !== "all" && page) {
		return useQuery({
			queryKey: ["sorted products", page, query],
			queryFn: () => ProductsService.getSortedProducts(page, query),
			onError: (err) => {
				console.log(err.message);
			},
			keepPreviousData: true,
		});
	}

	if (page && query !== "") {
		return useQuery({
			queryKey: ["products", page],
			queryFn: () => ProductsService.getProducts(page),
			onError: (err) => {
				console.log(err.message);
			},
			keepPreviousData: true,
		});
	}

};

export { useProductsQuery };
