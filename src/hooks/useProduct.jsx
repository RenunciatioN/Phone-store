import { useQuery } from "@tanstack/react-query";
import { ProductsService } from "../services/products.servises";

const useProduct = (id) => {
	return useQuery({
		queryFn: () => ProductsService.getProduct(id),
		queryKey: ["product", id],
		onError: (err) => {
			alert(err.message);
		},
	});
};

export { useProduct };
