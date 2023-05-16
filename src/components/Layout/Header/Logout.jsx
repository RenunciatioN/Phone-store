import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}

	span {
		font-weight: 500;
		margin-left: 4px;
	}
`;

const Logout = ({ logOutHandler }) => {
	return (
		<Wrapper onClick={logOutHandler}>
			<MdOutlineLogout color="#fff" />
			<span>Log out</span>
		</Wrapper>
	);
};

export default Logout;
