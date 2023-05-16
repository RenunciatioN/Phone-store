import api from "./instance/api";

export const ProductsService = {
	async getProducts(page) {
		const { data } = await api.get(`/products?populate=*&pagination[page]=${page}&pagination[pageSize]=8`);
		return data
	},

	async getSortedProducts(page, query)  {
		const { data } = await api.get(`/products?populate=*&filters[category][name][$eqi]=${query}&pagination[page]=${page}&pagination[pageSize]=8`);
		return data
	},
	async getCart(page, query)  {
		const { data } = await api.get(`/products?populate=*&filters[category][name][$eqi]=${query}&pagination[page]=${page}&pagination[pageSize]=8`);
		return data
	}
};





// async getProduct(id) {
// 	const { data } = await api.get(`/products?populate=*&filters[id][$eq]=${id}`);
// 	return data;
// },


