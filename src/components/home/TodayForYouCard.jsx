import { useState, memo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Counter from '../../components/react-bits/Counter/Counter';
import '../../styles/home/todayForYou.css';

const TodayForYouCard = memo(({ delay }) => {
	const [count, setCount] = useState(0);
	const [fav, setFav] = useState(false);
	console.log('delay', delay);
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 20 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: false, amount: 0.2 }}
			transition={{ duration: 0.3, ease: 'easeInOut', delay: delay }}
			className="todayForYouCard rounded-lg flex flex-col w-[300px] flex-shrink-0 h-[420px] shadow-xl bg-white border-b border-gray-300"
		>
			<div className="w-full h-2/3  flex items-center justify-center relative select-none">
				<img
					loading="lazy"
					className="w-full h-full object-cover rounded-t-lg object-center"
					src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png"
					alt=""
				/>
				<motion.div
					className="bg-white absolute top-2 p-2 rounded-full right-2 cursor-pointer"
					onClick={() => setFav(prev => !prev)}
					whileTap={{ scale: 0.85 }}
				>
					<svg width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<motion.path
							key={fav ? 'liked' : 'unliked'}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: 'spring', stiffness: 100, damping: 15 }}
							d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
							fill={fav ? '#FF2056' : 'transparent'}
							stroke={fav ? '#FF2056' : 'black'}
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="3"
						/>
					</svg>
				</motion.div>
				<div className="absolute bottom-2 right-2 bg-white px-1 py-1 rounded-lg flex justify-center items-center gap-2 ">
					<div
						onClick={() => {
							setCount(prev => Math.max(0, prev - 1));
						}}
						className="h-[25px] w-[25px] bg-gray-200 flex justify-center items-center rounded-lg cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
						</svg>
					</div>
					<Counter
						value={count}
						places={[100, 10, 1]}
						fontSize={20}
						padding={5}
						gap={10}
						textColor="black"
						fontWeight={900}
					/>
					<div
						onClick={() => {
							setCount(prev => (prev < 9 ? prev + 1 : prev));
						}}
						className="h-[25px] w-[25px] bg-gray-200 flex justify-center items-center rounded-lg cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="22"
							height="22"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
						</svg>
					</div>
				</div>
			</div>

			<div className="flex flex-col h-full p-2">
				<h1 className="title text-base font-semibold leading-tight">
					Speed and Water Proof Shoes best for sports and swimming and it has too long title
				</h1>
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
				<div className="flex gap-2 mt-3 items-center pl-1">
					<p className="text-2xl font-bold">Rs. 1500</p>
					<p className="line-through text-gray-400 font-semibold">Rs. 2500</p>
				</div>
			</div>
		</motion.div>
	);
});

export default TodayForYouCard;
