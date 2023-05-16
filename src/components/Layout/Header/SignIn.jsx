import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignBtn = styled.span`
	padding: 8px 14px;
	background-color: rgba(97, 92, 89, 0.438);
	border-radius: 8px;
	cursor: pointer;
	color: #fff;
	font-weight: 500;

	:hover {
		opacity: 0.9;
	}
`;

const SignIn = () => {
	
	return (
		<Link to="/login">
			<SignBtn>Sign in</SignBtn>
		</Link>
	);
};

export default SignIn;
