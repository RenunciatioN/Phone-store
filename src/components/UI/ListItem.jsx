import React from "react";
import styled from "styled-components";

const Item = styled.li`
	list-style: none;
	font-weight: 500;
	cursor: pointer;
	color: #a7a0a0;

	:hover {
		color: #000000;
	}

	.active {
		color: #000;
	}
`;

const ListItem = ({ children }) => {
	return <Item>{children}</Item>;
};

export default ListItem;
