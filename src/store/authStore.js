import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useUserFavorites = create(
	immer(
		devtools(
			persist(
				(set) => ({
					favoriteList: [],
					addToFavorite: (id) =>
						// set((state) => {
						// 	const www = [...state.favoriteList];
						// 	if (!www.includes(id)) state.favoriteList.push(id);
						// }),
						set((state) => {
								if (!state.favoriteList.includes(id)) return {favoriteList: [...state.favoriteList, id]};
							}),

					removeToFavorite: (id) =>
						// set((state) => {
						// 	const newList = state.favoriteList.filter(
						// 		(item) => id !== item
						// 	);
						// 	state.favoriteList = newList;
						// }), 
						set((state) => {
							const newList = state.favoriteList.filter(
								(item) => id !== item
							);
							return {favoriteList: [...newList]};
						}),
				}),
				{
					name: "favorites",
				}
			)
		)
	)
);

export const useAuthStore = create(
	devtools(
		persist(
			(set) => ({
				authToken: "",
				updateAuthToken: (token) => set({ authToken: token }),
				removeAuthToken: () => set({ authToken: "" }),
			}),

			{
				name: "auth",
			}
		)
	)
);

export const useUserStore = create(
	devtools(
		persist(
			(set) => ({
				user: {},
				setUser: (newUser) => set({ user: { ...newUser } }),
				removeUser: () => set({ user: {} }),
			}),

			{
				name: "user",
			}
		)
	)
);
