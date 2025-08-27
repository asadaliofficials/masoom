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
			{/* <AboutHome /> */}
			<LifeIsAFashion />
			<FlashSale />
			<MasoomStyleHome />
			<TodayForYou />
			{/* <BestSellerHome /> */}
			{/* <StackCards /> */}
			{/* <hr style={{ opacity: '0.3' }} /> */}
		</>
	);
};

export default Home;
