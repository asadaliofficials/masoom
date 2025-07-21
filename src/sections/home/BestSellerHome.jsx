import BestSellerCard from '../../components/home/BestSellerCard';
import '../../styles/home/bestSeller.css';

const BestSellerHome = () => {
	return (
		<div className="bestSeller p-16 bg-gray-100 ">
			<h2 className="heading text-4xl font-bold tracking-wide">Best Seller Products</h2>
			<div className="bestSellerCards flex gap-12 mt-8 justify-center">
				{[
					'https://d2bl4mvd8nzejc.cloudfront.net/327-large_minimal_fashion/linen-blend-tuxedo-jacket.jpg',
					'https://d2bl4mvd8nzejc.cloudfront.net/322-large_minimal_fashion/double-breasted-gabardine-blazer.jpg',
					'https://d2bl4mvd8nzejc.cloudfront.net/316-large_minimal_fashion/double-breasted-coat.jpg',
					'https://d2bl4mvd8nzejc.cloudfront.net/319-large_minimal_fashion/bodycon-midi-dress.jpg',
				].map((item, i) => (
					<BestSellerCard url={item} key={i} delay={i * 0.2} />
				))}
			</div>
		</div>
	);
};

export default BestSellerHome;
