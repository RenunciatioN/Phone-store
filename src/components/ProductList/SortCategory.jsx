import React from "react";
import styled from "styled-components";
import ListItem from "../UI/ListItem";



const Sorting = styled.ul`
	display: flex;
	justify-content: space-between;
	max-width: 400px;
	margin: 0 auto;
	margin-bottom: 40px;
`;

const SortCategory = ({ setFilterValue, filterValue }) => {
	return (
		<Sorting>
			{["All", "iPhone", "iPad", "Mac", "Cases"].map((item, index) => (
				<ListItem key={item + index}>
					<span
						onClick={() => setFilterValue(item)}
						className={filterValue === item ? "active" : ""}
					>
						{item}
					</span>
				</ListItem>
			))}
		</Sorting>
	);
};

export default SortCategory;
