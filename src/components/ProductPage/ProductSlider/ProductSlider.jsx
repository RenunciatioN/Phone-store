import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { SlArrowRight } from "react-icons/sl";
import Slide from "./Slide/Slide";

import "swiper/css";
import "swiper/scss/pagination";
import style from "./ProductSlider.module.scss";

const ProductSlider = ({ product }) => {
	const productData = structuredClone(product.product.attributes);
	const dataImage = productData?.productSlider?.data;
	const swiperRef = useRef();

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			modules={[Pagination]}
			lazyPreloadPrevNext={3}
			onSwiper={(swiper) => {
				swiperRef.current = swiper;
			}}
			pagination={{ clickable: true }}
		>
			{dataImage &&
				dataImage.map((img, index) => (
					<SwiperSlide key={index}>
						<Slide imgPath={img.attributes.url} />
					</SwiperSlide>
				))}
			<button
				className={style.arrowLeftWrapp}
				onClick={() => swiperRef.current.slidePrev()}
			>
				<SlArrowRight size={26} fill="#494848" />
			</button>

			<button
				className={style.arrowRightWrapp}
				onClick={() => swiperRef.current.slideNext()}
			>
				<SlArrowRight size={26} fill="#494848" />
			</button>
		</Swiper>
	);
};

export default ProductSlider;
