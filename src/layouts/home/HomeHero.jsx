import Categories from '../../components/home/Categories.jsx';
import HeroBanner from '../../components/home/HeroBanner.jsx';
import Nav from '../../components/home/nav.jsx';
const HomeHero = () => {
	return (
		<>
			<Nav />
			<hr style={{ opacity: '0.3' }} />
			<HeroBanner />
			<hr style={{ opacity: '0.3' }} />
			<Categories />
		</>
	);
};

export default HomeHero;
