import { useContext } from 'react';
import BestSellerCard from '../../components/home/BestSellerCard';
import '../../styles/home/bestSeller.css';
import ProductsContext from '../../context/ProductsContext.js';

const BestSellerHome = () => {
	const products = useContext(ProductsContext);
	const bestSellerIds = [112, 113, 114, 115]; // or your preferred best sellers
	const bestSellerProducts = bestSellerIds
		.map(id => products.find(p => Number(p.id) === Number(id)))
		.filter(Boolean);

	return (
		<div className="bestSeller p-16 bg-gray-100 ">
			<h2 className="heading text-3xl font-bold tracking-wide">Best Seller Products</h2>
			<div className="bestSellerCards flex gap-12 mt-8 justify-center">
				{bestSellerProducts.map((product, i) => (
					<BestSellerCard product={product} key={product.id} delay={i * 0.2} />
				))}
			</div>
		</div>
	);
};

export default BestSellerHome;
