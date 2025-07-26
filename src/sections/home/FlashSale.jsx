import React, { useEffect, useState, useRef, useContext } from 'react';
import FlashSaleCard from '../../components/home/FlashSaleCard';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
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

const FlashSale = () => {
	const [time, setTime] = useState({ hours: 8, minutes: 17, seconds: 25 });
	const cardsRef = useRef(null);
	const products = useContext(ProductsContext);
	const [favItems, setFavItems] = useState(getFavFromLocalStorage());

	const format = num => String(num).padStart(2, '0');

	useEffect(() => {
		const tick = () => {
			setTime(prev => {
				let { hours, minutes, seconds } = prev;

				if (hours === 0 && minutes === 0 && seconds === 0) {
					clearInterval(interval);
					return prev;
				}

				if (seconds > 0) {
					seconds--;
				} else if (minutes > 0) {
					minutes--;
					seconds = 59;
				} else if (hours > 0) {
					hours--;
					minutes = 59;
					seconds = 59;
				}

				return { hours, minutes, seconds };
			});
		};

		const interval = setInterval(tick, 1000);

		return () => clearInterval(interval);
	}, []);

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

	const scrollAmount = 320;

	const handleScrollLeft = () => {
		if (cardsRef.current) {
			cardsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		}
	};

	const handleScrollRight = () => {
		if (cardsRef.current) {
			cardsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	const flashSaleIds = [8, 75, 21, 101, 85, 40, 34, 47];
	const flashSaleProducts = flashSaleIds
		.map(id => products.find(p => Number(p.id) === Number(id)))
		.filter(Boolean);

	return (
		<>
			<div className="flash-sale w-full px-12 py-12 ">
				<div className="header text-2xl font-bold flex items-center justify-between">
					<div className="flex items-center justify-center gap-1">
						<motion.div
							animate={{ opacity: [1, 0.3, 1] }}
							transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
						>
							{/* i have my self deleted svg dont add it */}
							logo
						</motion.div>
						<h2 className="text-3xl">Flash Sale</h2>

						<div className="flex items-center justify-center gap-2 ml-4">
							<div className="flex items-center justify-center gap-1">
								<div className="bg-rose-500 rounded-full p-1 text-white text-sm tracking-wider flex justify-center items-center h-7 w-7">
									{format(time.hours)}
								</div>
								<span className="text-md font-semibold">:</span>
								<div className="bg-rose-500 rounded-full p-1 text-white text-sm tracking-wider flex justify-center items-center h-7 w-7">
									{format(time.minutes)}
								</div>
								<span className="text-md font-semibold">:</span>
								<div className="bg-rose-500 rounded-full p-1 text-white text-sm tracking-wider flex justifyCenter items-center h-7 w-7">
									{format(time.seconds)}
								</div>
							</div>
						</div>
					</div>

					<div className="scrollButtons flex justify-center items-center gap-4">
						<div
							className="px-1 rounded-lg border-2 border-gray-300 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
							onClick={handleScrollLeft}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-arrow-left-short"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
								/>
							</svg>
						</div>
						<div
							className="px-1 rounded-lg border-2 border-gray-300 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
							onClick={handleScrollRight}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-arrow-right-short"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div
					className="cards mt-6 flex flex-nowrap gap-8 overflow-x-auto w-full min-w-0"
					ref={cardsRef}
				>
					{/* 8, 75, 21, 101, 85, 40, 34, 47 */}
					{flashSaleProducts.map(product => (
						<FlashSaleCard
							key={product.id}
							product={product}
							isFav={favItems.some(item => item.id === product.id)}
							onFavToggle={() => handleFavToggle(product)}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default FlashSale;
