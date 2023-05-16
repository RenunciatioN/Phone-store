import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const InputEl = styled.input`
	border: none;
	border-bottom: 2px solid #706f6f22;
	color: #a5a1a1;
	padding-bottom: 15px;
	font-size: 15px;
	font-weight: 500;
	transition: all 0.15s ease;
	width: ${(props) => props.width + "px" || "200px"};
	padding-left: 30px;

	:focus {
		outline: none;
		padding-bottom: 8px;
	}
	::placeholder {
		color: #a5a1a1c3;
		opacity: 1;
	}

	:-ms-input-placeholder {
		color: #a5a1a1c1;
	}

	::-ms-input-placeholder {
		color: #a5a1a1b7;
	}
`;

const InputWrapp = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

const Icon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const Input = ({ type, placeholder, width }) => {
	return (
		<InputWrapp>
			<Icon>
				<AiOutlineSearch size={20} color="#999898" />
			</Icon>

			<InputEl type={type} placeholder={placeholder} width={width} />
		</InputWrapp>
	);
};

export default Input;
