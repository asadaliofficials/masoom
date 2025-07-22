import AboutHome from '../components/home/AboutHome';
import HomeHero from '../sections/home/HomeHero';
import FlashSale from '../sections/home/FlashSale';
import BestSellerHome from '../sections/home/BestSellerHome';
import TodayForYou from '../sections/home/TodayForYou';
import StackCards from '../sections/home/StackCards';
import MasoomStyleHome from '../sections/home/MasoomStyleHome';
import LifeIsAFashion from '../components/home/LifeIsAFashion';
import Login from '../components/login/login';

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
			<hr style={{ opacity: '0.3' }} />
			{/* <StackCards />
			<hr style={{ opacity: '0.3' }} /> */}
			<MasoomStyleHome />
			<hr style={{ opacity: '0.3' }} />
			<LifeIsAFashion />
		</>
	);
};

export default Home;
