import AboutHome from '../components/home/AboutHome';
import HomeHero from '../sections/home/HomeHero';
import FlashSale from '../sections/home/FlashSale';
import BestSellerHome from '../sections/home/BestSellerHome';
import TodayForYou from '../sections/home/TodayForYou';

const Home = () => {
	return (
		<>
			<HomeHero />
			<hr style={{ opacity: '0.3' }} />
			<AboutHome />
			<hr style={{ opacity: '0.3' }} />
			<FlashSale />
			<hr style={{ opacity: '0.3' }} />
			<BestSellerHome />
			<hr style={{ opacity: '0.3' }} />
			<TodayForYou />
		</>
	);
};

export default Home;
