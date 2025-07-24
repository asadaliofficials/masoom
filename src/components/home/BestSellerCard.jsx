import '../../styles/home/bestSeller.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const BestSellerCard = ({ url, delay = 0 }) => {
	// Dummy data for demo
	const title =
		'The Title of this dress, and what if this has long title that should be ellipsized';
	const price = 2999;
	const oldPrice = 3999;
	const discount = 25;
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.5, ease: 'easeInOut', delay }}
			className="bestSellerCard group h-[500px] mx-auto w-full max-w-[340px] rounded-2xl shadow-xl flex flex-col items-center border border-gray-100 bg-white cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
		>
			<div className="relative h-[68%] w-full overflow-hidden rounded-t-2xl">
				<img
					loading="lazy"
					className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
					src={url}
					alt="img"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<div className="flex-1 w-full px-4 py-3 flex flex-col justify-between">
				{/* Title with tooltip */}
				<div className="mb-1">
					<h2
						className="font-bold text-lg text-gray-900 leading-tight line-clamp-2 cursor-help"
						title={title}
					>
						{title}
					</h2>
				</div>
				{/* Rating and sold */}
				<div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 16 16"
						fill="#FFC107"
					>
						<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
					</svg>
					<span className="font-semibold">4.8</span>
					<span>●</span>
					<span>4K Sold</span>
				</div>
				{/* Price row */}
				<div className="flex items-center gap-3 mb-2">
					<span className="text-xl font-bold text-black">Rs. {price}</span>
					<span className="line-through text-gray-400 text-base">Rs. {oldPrice}</span>
					<span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
						{discount}% OFF
					</span>
				</div>
				{/* View Details button */}
				<button className="mt-2 w-full py-2 rounded-lg border border-black bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-200">
					View Details
				</button>
			</div>
		</motion.div>
	);
};

export default BestSellerCard;
