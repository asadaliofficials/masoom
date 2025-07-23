import React, { useEffect, useState, useRef } from 'react';
import { delay, motion } from 'framer-motion';
import ProductPageCard from '../components/products/ProductPageCard';
const options = [
	'No Filters',
	'Most Popular',
	'Newest First',
	'Price: Low to High',
	'Price: High to Low',
	'Best Rated',
];

const categoryOptions = [
	{ label: 'All Categories', value: 'all' },
	{ label: 'Woman', value: 'woman' },
	{ label: 'Men', value: 'men' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Bag', value: 'bag' },
];

const colorOptions = [
	{ name: 'Red', value: '#ef4444' },
	{ name: 'Blue', value: '#3b82f6' },
	{ name: 'Green', value: '#22c55e' },
	{ name: 'Black', value: '#000000' },
	{ name: 'White', value: '#ffffff' },
];

const ratingOptions = [5, 4, 3, 2, 1];

const filterAnim = delayVal => ({
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: 'easeOut', delay: delayVal },
});
const fadeAnim = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
};

const Products = () => {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownToggleRef = useRef(null);
	const dropdownMenuRef = useRef(null);

	// Filter states
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [freeDelivery, setFreeDelivery] = useState(false);
	const [priceRange, setPriceRange] = useState({ min: '', max: '' });
	const [selectedColor, setSelectedColor] = useState('');
	const [selectedRating, setSelectedRating] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 5; // Example, replace with real value if needed

	useEffect(() => {
		const handleClickOutside = event => {
			if (
				dropdownMenuRef.current &&
				!dropdownMenuRef.current.contains(event.target) &&
				dropdownToggleRef.current &&
				!dropdownToggleRef.current.contains(event.target)
			) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className="w-full min-h-screen bg-gray-50 flex">
			{/* Sidebar/Filters */}
			<div className="filtersWrapper flex flex-col gap-4 w-[22%] p-4">
				{/* Category */}
				<motion.div
					{...filterAnim(0.5)}
					className="w-full px-4 py-5 bg-white flex flex-col gap-1 rounded-md shadow"
				>
					<legend className="text-xl font-semibold mb-3 select-none">Category</legend>
					{categoryOptions.map(opt => (
						<label
							key={opt.value}
							htmlFor={`cat-${opt.value}`}
							className="font-medium h-10 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg cursor-pointer"
						>
							{opt.label}
							<input
								type="radio"
								name="category"
								id={`cat-${opt.value}`}
								checked={selectedCategory === opt.value}
								onChange={() => setSelectedCategory(opt.value)}
								className="w-4 h-4 absolute right-3 accent-blue-500"
							/>
						</label>
					))}
				</motion.div>
				{/* Free Delivery */}
				<motion.div
					{...filterAnim(0.6)}
					className="w-full px-4 py-5 bg-white flex items-center justify-between rounded-md shadow"
				>
					<span className="text-lg font-medium">Free Delivery</span>
					<input
						type="checkbox"
						checked={freeDelivery}
						onChange={() => setFreeDelivery(!freeDelivery)}
						className="relative h-6 w-12 cursor-pointer appearance-none rounded-full bg-slate-400/30 transition-all duration-300 checked:bg-blue-500 before:absolute before:left-[-0.25rem] before:top-0 before:block before:h-6 before:w-6 before:rounded-full before:border before:bg-white before:shadow-md before:transition-all checked:before:translate-x-6 checked:before:border-blue-500"
					/>
				</motion.div>
				{/* Price Range */}
				<motion.div
					{...filterAnim(0.7)}
					className="w-full px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow"
				>
					<legend className="text-xl font-semibold mb-3 select-none">Price Range</legend>
					<div className="flex items-center gap-2">
						<input
							type="number"
							placeholder="Min"
							value={priceRange.min}
							onChange={e => setPriceRange(prv => ({ ...prv, min: e.target.value }))}
							className="w-20 px-2 py-1 border rounded"
						/>
						<span>-</span>
						<input
							type="number"
							placeholder="Max"
							value={priceRange.max}
							onChange={e => setPriceRange(prv => ({ ...prv, max: e.target.value }))}
							className="w-20 px-2 py-1 border rounded"
						/>
					</div>
				</motion.div>
				{/* Color */}
				<motion.div
					{...filterAnim(0.8)}
					className="w-full px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow"
				>
					<legend className="text-xl font-semibold mb-3 select-none">Color</legend>
					<div className="flex gap-2">
						{colorOptions.map(color => (
							<button
								key={color.value}
								type="button"
								className={`w-7 h-7 rounded-full border-2 ${
									selectedColor === color.value ? 'border-blue-500' : 'border-gray-300'
								}`}
								style={{ backgroundColor: color.value }}
								onClick={() => setSelectedColor(color.value)}
								aria-label={color.name}
							/>
						))}
					</div>
				</motion.div>
				{/* Rating */}
				<motion.div
					{...filterAnim(0.9)}
					className="w-full px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow"
				>
					<legend className="text-xl font-semibold mb-3 select-none">Rating</legend>
					<div className="flex flex-col gap-2">
						{ratingOptions.map(rating => (
							<button
								key={rating}
								type="button"
								className={`flex items-center gap-1 px-2 py-1 rounded ${
									selectedRating === rating
										? 'bg-blue-100 text-blue-600'
										: 'bg-gray-100 text-gray-500'
								}`}
								onClick={() => setSelectedRating(rating)}
							>
								{[...Array(rating)].map((_, i) => (
									<svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
										<polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
									</svg>
								))}
								{rating}
							</button>
						))}
					</div>
				</motion.div>
			</div>
			{/* Main Content */}
			<div className="flex-1 flex flex-col p-6">
				{/* Header */}
				<motion.div {...fadeAnim} className="productsHeader flex items-center justify-between mb-6">
					<div>
						<h1 className="text-3xl font-bold text-gray-800">All Products</h1>
						<p className="text-gray-500">Found 987 items</p>
					</div>
					{/* Center search box */}
					<div className="flex-1 flex justify-center">
						<div className="relative w-full max-w-md">
							<input
								type="text"
								placeholder="Search products..."
								className="pl-10 pr-20 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white text-gray-700 w-full shadow-sm focus:ring-0 focus:outline-0"
							/>
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
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
							</span>
							{/* Search button inside input */}
							<button
								type="button"
								className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 h-9 flex items-center justify-center transition-colors duration-200 focus:outline-none"
								aria-label="Search"
							>
								Search
							</button>
						</div>
					</div>
					{/* Right dropdown */}
					<div className="relative ml-4">
						<button
							type="button"
							ref={dropdownToggleRef}
							onClick={e => {
								e.stopPropagation();
								setDropdownOpen(!dropdownOpen);
							}}
							className="w-56 px-5 py-2.5 rounded-sm border border-gray-300 cursor-pointer text-slate-900 text-sm font-medium outline-none bg-white hover:bg-gray-50 flex items-center justify-between"
						>
							<span className="truncate">{selectedOption}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-3 fill-gray-500 ml-2"
								viewBox="0 0 24 24"
							>
								<path
									fillRule="evenodd"
									d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						{dropdownOpen && (
							<ul
								ref={dropdownMenuRef}
								className="absolute right-0 rounded-sm [box-shadow:0_8px_19px_-7px_rgba(215,215,215,1)] bg-white py-2 z-[1000] min-w-full w-max  max-h-96 overflow-auto"
							>
								{options.map((option, index) => (
									<li
										key={index}
										onClick={() => {
											setSelectedOption(option);
											setDropdownOpen(false);
										}}
										className="dropdown-item px-5 py-2.5 hover:bg-gray-50 text-slate-600 text-sm font-medium cursor-pointer"
									>
										{option}
									</li>
								))}
							</ul>
						)}
					</div>
				</motion.div>
				{/* Products List */}
				<div className="productsWrapper flex-1 bg-white rounded-md shadow p-6 flex flex-col">
					{/* Products will go here */}
					<div className="flex flex-wrap gap-8 justify-center">
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
						<ProductPageCard />
					</div>
					{/* Pagination */}
					<div className="flex justify-end mt-8">
						<nav className="inline-flex items-center gap-1 rounded-md bg-gray-50 p-2 shadow-sm">
							<button
								onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
								disabled={currentPage === 1}
								className={`px-3 py-1 rounded-md transition-colors duration-150 ${
									currentPage === 1
										? 'text-gray-300 cursor-not-allowed'
										: 'text-blue-500 hover:bg-blue-100'
								}`}
								aria-label="Previous"
							>
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
								<button
									key={page}
									onClick={() => setCurrentPage(page)}
									className={`px-3 py-1 rounded-md font-semibold transition-colors duration-150 ${
										currentPage === page
											? 'bg-blue-500 text-white shadow'
											: 'text-gray-700 hover:bg-blue-100'
									}`}
								>
									{page}
								</button>
							))}
							<button
								onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
								disabled={currentPage === totalPages}
								className={`px-3 py-1 rounded-md transition-colors duration-150 ${
									currentPage === totalPages
										? 'text-gray-300 cursor-not-allowed'
										: 'text-blue-500 hover:bg-blue-100'
								}`}
								aria-label="Next"
							>
								<svg
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<path d="M9 6l6 6-6 6" />
								</svg>
							</button>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
