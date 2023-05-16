
import ContentLoader from "react-content-loader";

const ProductsLoader = () => (
	<ContentLoader
		speed={2}
		width={1400}
		height={900}
		viewBox="0 0 1400 900"
		backgroundColor="#cec2d194"
		foregroundColor="#6bb9ec"
		
	>
		<rect x="60" y="0" rx="10" ry="8" width="300" height="380" />
		<rect x="380" y="0" rx="10" ry="8" width="300" height="380" />
		<rect x="700" y="0" rx="10" ry="8" width="300" height="380" />
		<rect x="1020" y="0" rx="10" ry="8" width="300" height="380" />

		<rect x="60" y="410" rx="8" ry="8" width="300" height="380" />
		<rect x="380" y="410" rx="8" ry="8" width="300" height="380" />
		<rect x="700" y="410" rx="8" ry="8" width="300" height="380" />
		<rect x="1020" y="410" rx="8" ry="8" width="300" height="380" />
	
	</ContentLoader>
);

export default ProductsLoader;
