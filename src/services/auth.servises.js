import api from "./instance/api";



export const AuthService = {

	async userAuth({ email, password }) {
		const { data } = await api.post("/auth/local", {
			identifier: email,
			password: password,
		});

		return data;
	},
	async userRegister({ userName, email, password }) {
		const { data } = await api.post("/auth/local/register", {
			username: userName,
			email: email,
			password: password,
		});

		return data;
	}

}

export const fetchRegister = async ({ userName, email, password }) => {
	try {
		const { data } = await api.post("/auth/local/register", {
			username: userName,
			email: email,
			password: password,
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};


export const fetchLogin = async ({ email, password }) => {
	try {
		const { data } = await api.post("/auth/local", {
			identifier: email,
			password: password,
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
