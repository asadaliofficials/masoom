import AboutHome from '../components/home/AboutHome';
import FlashSale from '../components/home/FlashSale';
import HomeHero from '../layouts/home/HomeHero';

const Home = () => {
	return (
		<>
			<HomeHero />
			<hr style={{ opacity: '0.3' }} />
			<AboutHome />
			<FlashSale />
		</>
	);
};

export default Home;
