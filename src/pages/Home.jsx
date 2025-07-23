import AboutHome from '../components/home/AboutHome';
import HomeHero from '../sections/home/HomeHero';
import StackCards from '../sections/home/StackCards';
import { lazy, Suspense } from 'react';
const LifeIsAFashion = lazy(() => import('../components/home/LifeIsAFashion'));
const BestSellerHome = lazy(() => import('../sections/home/BestSellerHome'));
const FlashSale = lazy(() => import('../sections/home/FlashSale'));
const TodayForYou = lazy(() => import('../sections/home/TodayForYou'));
const MasoomStyleHome = lazy(() => import('../sections/home/MasoomStyleHome'));

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
			<MasoomStyleHome />
			<hr style={{ opacity: '0.3' }} />
			{/* <StackCards />
			<hr style={{ opacity: '0.3' }} /> */}
			<LifeIsAFashion />
			<hr style={{ opacity: '0.3' }} />
		</>
	);
};

export default Home;
