import '../../styles/home/bestSeller.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const BestSellerCard = ({ delay = 0 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.5, ease: 'easeInOut', delay }}
			className="bestSellerCard h-[480px] mx-auto w-full max-w-[370px] rounded-lg  shoadow-xl flex flex-col items-center  border-b border-gray-200 bg-white cursor-pointer"
		>
			<div className="h-[89%]  w-full overflow-hidden rounded-t-lg">
				<img
					className="w-full h-full object-cover"
					src="https://d2bl4mvd8nzejc.cloudfront.net/327-large_minimal_fashion/linen-blend-tuxedo-jacket.jpg"
					alt="img"
				/>
			</div>
			<div className="h-[11%] w-full px-2 py-1 font-semibold leading-tight hover:opacity-100 transition-all duration-300 opacity-70">
				<h2>The Title of this dress, and what if this has long title </h2>
			</div>
		</motion.div>
	);
};

export default BestSellerCard;
