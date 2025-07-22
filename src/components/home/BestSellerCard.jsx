import '../../styles/home/bestSeller.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const BestSellerCard = ({ url, delay = 0 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.5, ease: 'easeInOut', delay }}
			className="bestSellerCard h-[500px] mx-auto w-full max-w-[370px] rounded-lg  shoadow-xl flex flex-col items-center  border-b border-gray-200 bg-white cursor-pointer"
		>
			<div className="h-[82%]  w-full overflow-hidden rounded-t-lg">
				<img loading="lazy" className="w-full h-full object-cover" src={url} alt="img" />
			</div>
			<div className="h-[18%] w-full px-3 py-2 font-semibold leading-tight hover:opacity-100 transition-all duration-300 opacity-70">
				<h2>The Title of this dress, and what if this has long title </h2>
				<div className="flex  px-x mt-2 gap-2 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 16 16"
						fill="#FFC107"
					>
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 
  4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
						/>
					</svg>
					4.8 ● 4K Sold
				</div>
			</div>
		</motion.div>
	);
};

export default BestSellerCard;
