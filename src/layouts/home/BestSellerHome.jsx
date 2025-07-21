import BestSellerCard from '../../components/home/BestSellerCard';
import '../../styles/home/bestSeller.css';

const BestSellerHome = () => {
	return (
		<div className="bestSeller p-16 bg-gray-100 ">
			<h2 className="heading text-4xl font-bold tracking-wide">Best Seller Products</h2>
			<div className="bestSellerCards flex gap-12 mt-8 justify-center">
				{[0, 1, 2, 3].map(i => (
					<BestSellerCard key={i} delay={i * 0.2} />
				))}
			</div>
		</div>
	);
};

export default BestSellerHome;
