import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


export const useCartStore = create(
	devtools(
		persist(
			(set) => ({
				cartItems: [],
				addToCart: (item) =>
					set((state) => {
						const findItem = state.cartItems.find(obj => obj.id === item.id)
						
						if (findItem) {
							findItem.quantity++
						} else {
							return { cartItems: [...state.cartItems, {
								...item,
								quantity: 1
							}]};
						}

						return {cartItems: [...state.cartItems]}
					}),
				removeItem: (id) => set((state) => {
					const newCartList = state.cartItems.filter(item => item.id !== id)

					return {cartItems: [...newCartList]}
				}),
			}),

			{
				name: "cart",
			}
		)
	)
);
