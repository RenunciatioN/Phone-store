import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQueryClient } from "@tanstack/react-query";

import ProductCard from "./ProductCard/ProductCard";
import { useProductsQuery } from "../../hooks/useProductsQuery";
import SortCategory from "./SortCategory";
import ProductsLoader from "./ProductsLoader";
import { SlArrowRight } from "react-icons/sl";
import { ProductsService } from "../../services/products.servises";

import "swiper/css";
import style from "./ProductsList.module.scss";

const Wrapper = styled.div`
	position: relative;
	padding: 60px;
	max-width: 1500px;
	margin: 0 auto;
	background-color: #e4e3e3c8;
	border-radius: 30px;
	box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.16);
`;
const Roots = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 300px);
	grid-template-rows: 1fr;
	justify-content: center;
	gap: 60px 40px;
`;
const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;
const NotFound = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
`;

const Products = () => {
	const [filterValue, setFilterValue] = useState("All");
	const [activePage, setActivePage] = useState(1);
	const queryClient = useQueryClient();
	const {
		data: productList,
		isLoading,
		isSuccess,
		isError,
		isPreviousData,
	} = useProductsQuery(activePage, filterValue);

	const pages = productList?.meta.pagination.pageCount;

	useEffect(() => {
		setActivePage(1);
	}, [pages]);

	const nextPageHandler = () => {
		if (activePage < pages && !isPreviousData)
			setActivePage((page) => page + 1);
	};
	const prevPageHandler = () => {
		if (activePage === 1 && isPreviousData) return;
		setActivePage((page) => page - 1);
	};

	useEffect(() => {
		const hasMore = productList?.meta.pagination.pageCount;
		if (hasMore > 1) {
			const data = queryClient.prefetchQuery(
				["products", activePage + 1],
				() => ProductsService.getProducts(activePage + 1),
				{ staleTime: 2000 }
			);
		}
	}, [productList, activePage, queryClient]);

	return (
		<div style={{ marginTop: "200px" }}>
			<SortCategory
				setFilterValue={setFilterValue}
				filterValue={filterValue}
			/>
			{isLoading ? (
				<Loader>
					<ProductsLoader />
				</Loader>
			) : !isError ? (
				<Wrapper id="section-products">
					<Swiper spaceBetween={50} slidesPerView={1}>
						<SwiperSlide>
							<Roots>
								{isSuccess && productList?.data.length !== 0 ? (
									productList?.data.map((obj, index) => (
										<div key={index + "product"}>
											<Link
												to={`/product/${obj.id}`}
												state={{ product: obj }}
											>
												<ProductCard
													{...obj.attributes}
												/>
											</Link>
										</div>
									))
								) : (
									<NotFound>Item not found</NotFound>
								)}
							</Roots>
						</SwiperSlide>
					</Swiper>
					<button
						className={style.prevPage}
						disabled={activePage === 1}
						onClick={() => prevPageHandler()}
					>
						<SlArrowRight size={26} fill="#494848" />
					</button>
					<button
						className={style.nextPage}
						disabled={activePage === pages}
						onClick={() => nextPageHandler()}
					>
						<SlArrowRight size={26} fill="#494848" />
					</button>
				</Wrapper>
			) : (
				<div>error</div>
			)}
		</div>
	);
};

export default Products;
