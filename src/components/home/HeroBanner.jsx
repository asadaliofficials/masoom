import SplitText from '../../components/react-bits/SplitText/SplitText';
import CircularText from '../../components/react-bits/CircularText/CircularText';
import Lottie from 'lottie-react';
import saleAnimation from '../../assets/animations/Sale.json';
import giftAnimation from '../../assets/animations/Referral gift.json';
import { useState } from 'react';
const HeroBanner = () => {
	const [step, setStep] = useState(0);
	return (
		<div className="w-full h-[430px] bg-gray-100 flex">
			<div className="left relative  flex flex-col items-start justify-center p-12 w-[50%] ">
				<SplitText
					text="#Big Fashion Sale"
					className="text-xl font-semibold opacity-50 text-center"
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
					text="Limited Time Offer!"
					className="text-6xl font-bold leading-20 tracking-tight text-center"
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
					className="text-6xl font-bold leading-20 tracking-tight text-center"
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
				<SplitText
					text="
				Refresh your wardrobe with pieces that balance comfort and confidence."
					delay={80}
					duration={0.5}
					ease="power2.out"
					splitType="words"
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="start"
				/>
				<SplitText
					text="
Discover styles made for real life, every day."
					delay={80}
					duration={0.5}
					ease="power2.out"
					splitType="words"
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="start"
				/>
				<div className="absolute w-35 h-35 top-0 left-50">
					<Lottie
						className="w-full h-full"
						animationData={saleAnimation}
						loop={true}
						autoplay={true}
					/>
				</div>
				<div className="flex gap-4 justify-center items-center mt-4 pl-2">
					<button class="relative inline-block px-4 py-3 font-semibold text-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span class="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
							Show All Products
						</span>
					</button>
					<button class="relative inline-block px-4 py-3 font-semibold text-white bg-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span class="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
							Contact US
						</span>
					</button>
				</div>
			</div>
			<div className="right w-[50%]  relative overflow-hidden shadow-inner">
				{/* <div className="absolute w-35 h-35 bottom-8  right-0">
					<Lottie
						className="w-full h-full"
						animationData={giftAnimation}
						loop={true}
						autoplay={true}
					/>
				</div> */}
				<img
					className="object-cover object-top w-full h-full "
					src="/src/assets/images/hero bg.png"
					alt=""
				/>

				<CircularText
					text="MASOOM * FASHION * SALE * "
					onHover="speedUp"
					spinDuration={20}
					className=" absolute -right-65 bottom-50"
				></CircularText>
			</div>
		</div>
	);
};

export default HeroBanner;
