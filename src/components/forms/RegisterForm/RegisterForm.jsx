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

const RegisterForm = () => {
	const updateAuthToken = useAuthStore((state) => state.updateAuthToken);
	const navigate = useNavigate();
	const setUser = useUserStore(state => state.setUser)
	const {
		mutate: registerUser,
		data,
		isSuccess,
	} = useMutation((userData) => AuthService.userRegister(userData));

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: "onBlur",
	});

	const onSubmit = async (data) => {
		registerUser(data);
		reset();
	};

	if (isSuccess) {
		updateAuthToken(data.jwt);
		setUser(data.user)
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
					<h1 className="shine">Registration</h1>
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
						type="text"
						placeholder="User name"
						{...register("userName", {
							required: "Required field",
						})}
					/>
					{errors?.userName && (
						<ErrorText>{errors?.userName?.message}</ErrorText>
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
				<p>If you already have an account</p>
				<Link to="/login">Login</Link>
			</div>
		</div>
	);
};

export default RegisterForm;
