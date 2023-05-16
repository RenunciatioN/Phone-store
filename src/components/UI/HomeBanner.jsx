import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";

import bannerImg from "../../assets/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg";

const BannerBlock = styled.div`
	position: relative;
	height: calc(100vh - 150px);
	width: 100%;
	overflow-x: hidden;
	background-color: #000;
`;
const Figure = styled.figure`
	z-index: 1;
	position: absolute;
	border: 0;
	margin: 0;
	padding: 0;
	left: calc(50% + 0px);
	right: auto;
	bottom: 0px;
	top: auto;
	-webkit-transform: translatex(-50%);
	transform: translatex(-50%);

	background-image: url(${bannerImg});
	background-repeat: no-repeat;
	background-size: 3008px 624px;
	height: 624px;
	width: 3008px;
`;

const ButtonWrapp = styled.div`
	position: absolute;
	z-index: 9;
	display: flex;
	justify-content: center;
	width: 100%;
	top: 250px;
`;

const Button = styled.div`
	padding: 10px 30px;
	background-color: #615c599d;
	font-size: 20px;
	font-weight: 500;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease;
	:hover {
		background-color: #24b19e;
		color: #fff;
	}
`;
const Title = styled.h1`
	position: relative;
	font-size: 42px;
	color: #fff;
	z-index: 1;
	text-align: center;
	margin-top: 100px;
	z-index: 2;
`

const HomeBanner = () => {
	return (
		<BannerBlock>
			<Title>You only have to have the best</Title>
			<ButtonWrapp>
				<Link
					activeClass="active"
					to="section-products"
					spy={true}
					smooth={true}
					offset={-100}
					duration={1000}
				>
					<Button >Shop Now</Button>
				</Link>
			</ButtonWrapp>

			<Figure />
		</BannerBlock>
	);
};

export default HomeBanner;
