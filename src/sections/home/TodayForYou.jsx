import React, { useContext, useMemo, useState, useEffect } from 'react';
import TodayForYouCard from '../../components/home/TodayForYouCard';
import '../../styles/home/todayForYou.css';
import ProductsContext from '../../context/ProductsContext.js';

const FAV_KEY = 'favourites';
const getFavFromLocalStorage = () => {
	try {
		const favs = JSON.parse(localStorage.getItem(FAV_KEY));
		return Array.isArray(favs) ? favs : [];
	} catch {
		return [];
	}
};
const setFavToLocalStorage = favs => {
	localStorage.setItem(FAV_KEY, JSON.stringify(favs));
	window.dispatchEvent(new Event('favouritesUpdated'));
};

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

	const [favItems, setFavItems] = useState(getFavFromLocalStorage());

	useEffect(() => {
		const updateFav = () => setFavItems(getFavFromLocalStorage());
		window.addEventListener('favouritesUpdated', updateFav);
		return () => window.removeEventListener('favouritesUpdated', updateFav);
	}, []);

	const handleFavToggle = product => {
		const isFav = favItems.some(item => item.id === product.id);
		let updatedFavs;
		if (isFav) {
			updatedFavs = favItems.filter(item => item.id !== product.id);
		} else {
			updatedFavs = [
				...favItems,
				{
					id: product.id,
					title: product.title,
					image: product.images?.[0],
					price: product.price,
				},
			];
		}
		setFavToLocalStorage(updatedFavs);
		setFavItems(updatedFavs);
	};

	return (
		<div className="today-for-you  p-12">
			<h2 className="heading text-3xl font-bold tracking-wide">Today's For You!</h2>
			<div className="TodayForYouCards flex flex-wrap gap-8 mt-10 justify-center">
				{todayProducts.map((product, i) => (
					<TodayForYouCard
						key={product.id}
						product={product}
						isFav={favItems.some(item => item.id === product.id)}
						onFavToggle={() => handleFavToggle(product)}
					/>
				))}
			</div>
		</div>
	);
};

export default TodayForYou;
