import React from "react";

import style from "./Slide.module.scss";


const Slide = ({ imgPath, handlerSlide }) => {

	return (
		<div className={style.slide}>
			<img
				src={"http://localhost:1337" + imgPath}
				alt={"sss"}
				width={1000}
				loading="lazy"
			/>

			<div className="swiper-lazy-preloader"></div>
		</div>
	);
};

export default Slide;
