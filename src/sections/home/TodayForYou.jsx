import React, { useContext, useMemo } from 'react';
import TodayForYouCard from '../../components/home/TodayForYouCard';
import '../../styles/home/todayForYou.css';
import ProductsContext from '../../context/ProductsContext.js';

const TodayForYou = () => {
	const products = useContext(ProductsContext);
	const numCards = 16;
	const todayProducts = useMemo(() => {
		if (!products.length) return [];
		const min = 40;
		const max = Math.max(60, products.length - numCards);
		const start = Math.floor(Math.random() * (max - min + 1)) + min;
		return products.slice(start, start + numCards);
	}, [products]);

	return (
		<div className="today-for-you  p-12">
			<h2 className="heading text-3xl font-bold tracking-wide">Today's For You!</h2>
			<div className="TodayForYouCards flex flex-wrap gap-8 mt-10 justify-center">
				{todayProducts.map((product, i) => (
					<TodayForYouCard key={product.id} product={product} delay={i * 0.1} />
				))}
			</div>
		</div>
	);
};

export default TodayForYou;
