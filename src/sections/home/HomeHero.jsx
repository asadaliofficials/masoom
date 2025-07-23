import Categories from '../../components/home/Categories.jsx';
import HeroBanner from '../../components/home/HeroBanner.jsx';
const HomeHero = () => {
	return (
		<>
			<HeroBanner />
			<hr style={{ opacity: '0.3' }} />
			<Categories />
		</>
	);
};

export default HomeHero;
