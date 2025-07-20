import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/navbar.css';
const categories = ['All Category', 'Woman', 'Mens', 'Winter', 'Summer'];

const Nav = ({ count = 33 }) => {
	const displayCount = count > 9 ? '9+' : count;
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState('All Category');
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = e => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<>
			<div className="nav py-3 px-8 flex w-full justify-between items-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="logo flex items-center gap-1"
				>
					<img src="/src/assets/images/logo.png" width="40px" alt="logo" />
					<h1 className="font-bold tracking-wide select-none">MASOOM</h1>
				</motion.div>
				{/* seach div */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="flex items-center border border-gray-300 rounded-md w-full max-w-xl bg-white relative z-20 searchInputDiv"
				>
					<div className="relative categoryDropdownDiv" ref={dropdownRef}>
						<button
							onClick={() => setOpen(prev => !prev)}
							className="w-[160px] flex items-center justify-between bg-gray-100 text-gray-700 px-4 py-2 border-r border-gray-300 focus:outline-none"
						>
							{selected}
							<svg
								className="w-4 h-4 ml-2 text-gray-500"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						<AnimatePresence>
							{open && (
								<motion.ul
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.25 }}
									className="absolute top-full left-0 mt-1 w-[160px] bg-white border border-gray-200 rounded-md shadow-lg text-sm text-gray-700 overflow-hidden origin-top"
								>
									{categories.map(cat => (
										<li
											key={cat}
											onClick={() => {
												setSelected(cat);
												setOpen(false);
											}}
											className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
										>
											{cat}
										</li>
									))}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>

					<div className="relative flex-1 ">
						<input
							type="text"
							placeholder="Search product or brand here..."
							className="w-full px-10 py-2 focus:outline-none"
						/>
						<div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-search"
							>
								<path d="m21 21-4.34-4.34" />
								<circle cx="11" cy="11" r="8" />
							</svg>
						</div>
					</div>
				</motion.div>
				<div className="flex gap-2 navIconsParent">
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="seachIconMobile hidden relative w-10 h-10 items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer transition-all duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-search-icon lucide-search"
							>
								<path d="m21 21-4.34-4.34" />
								<circle cx="11" cy="11" r="8" />
							</svg>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer transition-all duration-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-heart-icon lucide-heart"
							>
								<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
							</svg>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<div className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer">
							{count > 0 && (
								<span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white text-sm font-bold rounded-full px-1.5 h-5 min-w-[20px] flex items-center justify-center">
									{displayCount}
								</span>
							)}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
							>
								<circle cx="8" cy="21" r="1" />
								<circle cx="19" cy="21" r="1" />
								<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
							</svg>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Nav;
