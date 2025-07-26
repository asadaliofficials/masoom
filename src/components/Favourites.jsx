import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

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

const Favourites = ({ open, onClose, productsList = [] }) => {
	const [favItems, setFavItems] = useState([]);
	const favRef = useRef(null);

	useEffect(() => {
		const favs = getFavFromLocalStorage();
		setFavItems(favs);
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const handleClick = e => {
			if (favRef.current && !favRef.current.contains(e.target)) {
				onClose();
			}
		};
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, [open, onClose]);

	const getProduct = id => productsList.find(p => p.id === id);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					ref={favRef}
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '100%' }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					className="fixed top-0 right-0 w-[370px] max-w-full h-full bg-white shadow-2xl z-[500] flex flex-col"
				>
					<div className="flex items-center justify-between p-4 border-b">
						<span className="text-xl font-bold">Favourites</span>
						<button
							className="text-gray-500 hover:text-black text-2xl cursor-pointer"
							onClick={onClose}
							aria-label="Close Favourites"
						>
							&times;
						</button>
					</div>
					<div className="flex-1 overflow-y-auto p-4">
						{favItems.length === 0 ? (
							<div className="text-center text-gray-400 mt-10">No favourites yet.</div>
						) : (
							<div className="flex flex-col gap-4">
								{favItems.map(item => {
									const product = getProduct(item.id);
									return (
										<div
											key={item.id}
											className="flex items-center gap-3 border rounded-lg p-3 shadow-sm bg-gray-50 relative"
										>
											{(item.image || product?.images?.[0]) && (
												<img
													src={item.image || product?.images?.[0]}
													alt={item.title || product?.title || 'Product'}
													className="w-14 h-14 object-cover rounded object-top"
												/>
											)}
											<div className="flex-1 flex flex-col">
												<div className="font-semibold text-base w-[250px] truncate">
													{item.title || product?.title || 'Product'}
												</div>
												<button
													className="text-red-500 hover:text-red-700 text-lg ml-2 mt-2 self-start"
													onClick={() => {
														const updatedFavs = favItems.filter(fi => fi.id !== item.id);
														setFavItems(updatedFavs);
														setFavToLocalStorage(updatedFavs);
													}}
													aria-label="Remove"
												>
													<svg
														fill="red"
														height="20"
														width="20"
														version="1.1"
														id="Layer_1"
														xmlns="http://www.w3.org/2000/svg"
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 512 512"
														xmlSpace="preserve"
														className="cursor-pointer"
													>
														<g>
															<g>
																<path
																	d="M465.423,48.241h-137.61V23.955C327.813,10.746,317.082,0,303.893,0h-95.785c-13.19,0-23.92,10.746-23.92,23.955V48.24
			H46.577c-6.655,0-12.049,5.394-12.049,12.049c0,6.655,5.394,12.049,12.049,12.049h22.332l15.228,396.396
			C85.069,492.995,104.818,512,129.099,512h253.804c24.281,0,44.03-19.006,44.96-43.267l15.228-396.396h22.332
			c6.653,0,12.049-5.394,12.049-12.049C477.472,53.635,472.078,48.241,465.423,48.241z M208.285,24.097h95.43v24.143h-95.43V24.097z
			 M403.784,467.809c-0.433,11.268-9.605,20.094-20.882,20.094H129.099c-11.276,0-20.448-8.827-20.882-20.095L93.025,72.338h325.952
			L403.784,467.809z"
																/>
															</g>
														</g>
														<g>
															<g>
																<path
																	d="M182.63,181.571c-0.127-6.575-5.494-11.817-12.042-11.817c-0.078,0-0.158,0-0.236,0.002
			c-6.652,0.128-11.943,5.626-11.815,12.278l3.781,196.634c0.126,6.575,5.495,11.817,12.042,11.817c0.078,0,0.158,0,0.236-0.002
			c6.653-0.128,11.943-5.624,11.815-12.278L182.63,181.571z"
																/>
															</g>
														</g>
														<g>
															<g>
																<path
																	d="M255.998,169.753c-6.654,0-12.049,5.394-12.049,12.049v196.634c0,6.654,5.394,12.049,12.049,12.049
			c6.655,0,12.049-5.394,12.049-12.049V181.802C268.047,175.148,262.653,169.753,255.998,169.753z"
																/>
															</g>
														</g>
														<g>
															<g>
																<path
																	d="M341.645,169.756c-6.628-0.147-12.151,5.162-12.278,11.815l-3.781,196.634c-0.129,6.653,5.162,12.15,11.815,12.278
			c0.078,0.001,0.158,0.002,0.236,0.002c6.546,0,11.916-5.244,12.042-11.817l3.781-196.634
			C353.588,175.38,348.299,169.883,341.645,169.756z"
																/>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Favourites;
