import SplitText from '../../components/react-bits/SplitText/SplitText';
import CircularText from '../../components/react-bits/CircularText/CircularText';
import '../../styles/home/heroBanner.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroBanner = () => {
	return (
		<div className="heroBanner  w-full h-[460px]  flex ">
			<div className="left relative  flex flex-col items-start justify-center p-12 w-[50%] ">
				{/* Animated static texts with Framer Motion */}
				<motion.p
					className="text-xl font-semibold opacity-50 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.3 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					#Big Fashion Sale
				</motion.p>
				<SplitText
					text="Limited Time Offer!"
					className="splitText text-[4vw] font-bold leading-20 tracking-tight text-center"
					delay={50}
					duration={0.3}
					ease="power2.out"
					splitType="chars"
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="center"
				/>{' '}
				<SplitText
					text="
					Up To 50% OFF!"
					className="splitText text-[4vw] font-bold leading-20 tracking-tight text-center"
					delay={50}
					duration={0.3}
					ease="power2.out"
					splitType="chars"
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="center"
				/>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					transition={{ duration: 0.6, delay: 1 }}
					className="mt-4"
				>
					Refresh your wardrobe with pieces that balance comfort and confidence. Discover styles
					made for real life, every day.
				</motion.p>
				<motion.div
					className="flex gap-4 justify-center items-center mt-4 pl-2"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
				>
					<button className="active:scale-90 relative inline-block px-4 py-3 font-semibold text-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
							Show All Products
						</span>
					</button>
					<button className="active:scale-90 relative inline-block px-4 py-3 font-semibold text-white bg-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
							About US
						</span>
					</button>
				</motion.div>
			</div>
			<div className="right w-[50%]  relative overflow-hidden shadow-inner">
				<motion.img
					fetchPriority="high"
					className=" object-contain object-top w-full h-full "
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					loading="eager"
					src="https://res.cloudinary.com/dyibkikle/image/upload/v1753201796/hero-bg_w21blv.webp"
					alt=""
				/>
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 1 }}
					className=" absolute right-5 bottom-3"
				>
					<CircularText
						text="MASOOM * FASHION * SALE * "
						onHover="speedUp"
						spinDuration={20}
					></CircularText>
				</motion.div>
			</div>
		</div>
	);
};

export default HeroBanner;
