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
							<svg
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								width="50"
								viewBox="0 0 720 720"
								enableBackground="new 0 0 720 720"
								xmlSpace="preserve"
							>
								<path
									fill="#000000"
									opacity="1.000000"
									stroke="none"
									d="M333.230225,609.099243 C301.931091,605.198853 272.459229,596.696533 244.964233,582.093567 C188.794266,552.261047 149.191177,507.574005 126.531593,448.131714 C114.218849,415.831970 108.904160,382.237946 110.983032,347.732391 C114.410858,290.836578 134.543350,240.428726 172.036514,197.404053 C211.138931,152.532745 260.431244,124.660233 319.045074,115.238152 C398.237335,102.508125 468.799896,123.000755 528.920471,176.214371 C572.495850,214.783585 599.107300,263.634033 607.865662,321.123047 C620.016663,400.881378 598.599976,471.230591 544.006104,530.833008 C505.895081,572.440369 458.228424,597.104370 402.873657,607.035339 C379.953400,611.147339 356.833527,611.282837 333.230225,609.099243 M312.454651,415.811188 C307.360962,435.450470 302.231750,455.080658 297.202240,474.736359 C296.144714,478.869354 293.123291,483.312073 298.222412,486.964905 C303.321381,490.617676 306.658173,486.275665 310.184174,484.007141 C360.607147,451.566254 410.966644,419.026764 461.338959,386.507172 C467.775757,382.351654 474.208191,378.189178 480.622772,373.999451 C483.479340,372.133606 485.482330,369.684631 484.268982,366.073669 C483.110962,362.627258 480.249847,361.405579 476.791504,361.371948 C475.292206,361.357361 473.792786,361.348358 472.293427,361.348206 C449.969299,361.345764 427.645142,361.350800 405.321014,361.341461 C396.740143,361.337860 395.611755,359.930542 397.788055,351.567535 C407.083282,315.848206 416.391998,280.132355 425.790039,244.440018 C426.742096,240.824219 427.285553,237.579193 423.920868,234.944244 C420.300720,232.109161 417.355286,234.370972 414.407227,236.245499 C407.381348,240.712860 400.375031,245.211380 393.382782,249.731293 C352.827942,275.946716 312.278442,302.170410 271.729462,328.394928 C261.800964,334.816010 251.887863,341.260864 241.953293,347.672455 C239.118729,349.501831 236.916977,351.695374 237.937531,355.406281 C238.981354,359.201691 241.965225,360.456268 245.567642,360.620148 C247.230530,360.695801 248.899002,360.656097 250.564941,360.656067 C273.055664,360.655304 295.546417,360.638428 318.037140,360.658203 C324.950134,360.664276 326.343414,362.470459 324.614716,369.172028 C320.670044,384.464142 316.681183,399.744843 312.454651,415.811188 z"
								/>
							</svg>
						</motion.div>
						<h2 className="flashSaleHeadding text-3xl">Flash Sale</h2>

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
