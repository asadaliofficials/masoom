import AboutHome from '../components/home/AboutHome';
import HomeHero from '../layouts/home/HomeHero';
import FlashSale from '../layouts/home/FlashSale';
import BestSellerHome from '../layouts/home/BestSellerHome';

const Home = () => {
	return (
		<>
		 {/* <HomeHero />
			<hr style={{ opacity: '0.3' }} />
			<AboutHome />
			<hr style={{ opacity: '0.3' }} />
			<FlashSale />
			<hr style={{ opacity: '0.3' }} />  */}
			<BestSellerHome />
		</>
	);
};

export default Home;
