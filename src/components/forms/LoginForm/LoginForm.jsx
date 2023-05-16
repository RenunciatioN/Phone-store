import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImLock } from "react-icons/im";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../services/auth.servises";
import { useAuthStore, useUserStore } from "../../../store/authStore"

import '../form.scss'

const Form = styled.form`
	width: 400px;
	display: flex;
	row-gap: 30px;
	flex-direction: column;

	label {
		position: relative;
	}
`;
const Back = styled.div`
	display: flex;
	align-items: center;
	color: #0598c5;
`;
const ErrorText = styled.div`
	position: absolute;
	width: 100%;
	color: #e24848d8;
	margin-top: 10px;
	text-align: center;
	font-size: 14px;
`;

const LoginForm = () => {
	const updateAuthToken = useAuthStore((state) => state.updateAuthToken);
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();
	const {
		mutate: authUser,
		data: response,
		isSuccess,
	} = useMutation(['user auth'], (userData) => AuthService.userAuth(userData));

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = async (data) => {
		authUser(data);
		reset();
	};

	if (isSuccess) {
		updateAuthToken(response.jwt);
		setUser(response.user)
		navigate(-1);
	}

	return (
		<div className="form-wrapp">
			<Link to="/">
				<Back>
					<HiOutlineArrowNarrowLeft size={28} />
					Back
				</Back>
			</Link>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="segment">
					<h1 className="shine">Login</h1>
				</div>

				<label>
					<input
						type="text"
						placeholder="Email Address"
						{...register("email", {
							required: "Required field",
							validate: (value) => {
								return (
									[/@/].every((pattern) =>
										pattern.test(value)
									) || 'email must contain an "@"'
								);
							},
						})}
					/>
					{errors?.email && (
						<ErrorText>
							{errors?.email?.message || "invalid email"}
						</ErrorText>
					)}
				</label>

				<label>
					<input
						type="password"
						placeholder="Password"
						{...register("password", {
							required: "Required field",
							minLength: {
								value: 6,
								message:
									"Password must be more than 5 characters long",
							},
						})}
					/>
					{errors?.password && (
						<ErrorText>
							{errors?.password?.message || "invalid password"}
						</ErrorText>
					)}
				</label>
				<button type="submit">
					<div>
						<ImLock size={16} />
					</div>
					<span>Log in</span>
				</button>
			</Form>
			<div className="form-link">
				<p>If you don't have an account, go to</p>
				<Link to="/registration">Registration</Link>
			</div>
		</div>
	);
};

export default LoginForm;
