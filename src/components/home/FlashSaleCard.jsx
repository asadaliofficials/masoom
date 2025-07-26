import { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../../styles/home/flashSale.css';

const FlashSaleCard = memo(({ product }) => {
	const navigate = useNavigate();
	const [fav, setFav] = useState(false);

	const img =
		product?.images?.[0] ||
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png';
	const title =
		product?.title ||
		'Speed and Water Proof Shoes best for sports and swimming and it has too long title';
	const price = product?.price || 1500;
	const oldPrice = product?.oldPrice || 2500;
	const solds = product?.solds || '7/10';
	const id = product?.id;

	const handleClick = () => {
		if (id) navigate(`/product/${id}`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 20 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.3, ease: 'easeInOut', }}
			className="flashSaleCard rounded-lg flex flex-col w-[300px] flex-shrink-0 h-[420px] shadow-xl bg-white border-b border-gray-300 cursor-pointer"
			onClick={handleClick}
		>
			<div className="w-full h-2/3  flex items-center justify-center relative select-none">
				<img
					loading="lazy"
					className="w-full h-full object-cover rounded-t-lg object-top"
					src={img}
					alt={title}
				/>
				<motion.div
					className="bg-white absolute top-2 p-2 rounded-full right-2 cursor-pointer"
					onClick={e => {
						e.stopPropagation();
						setFav(prev => !prev);
					}}
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
			</div>

			<div className="flex flex-col h-full p-2">
				<h1 className="title text-base font-semibold leading-tight">{title}</h1>
				<div className="flex gap-2 mt-3 items-center">
					<p className="text-2xl font-bold">Rs. {price}</p>
					<p className="line-through text-rose-500 font-semibold">Rs. {oldPrice}</p>
				</div>
				<hr style={{ opacity: '0.3' }} />
				<div className="flex gap-3 justify-center items-center mt-1">
					<div className="w-full h-3 rounded-full  bg-gray-200">
						<div className="w-[70%] h-full bg-black rounded-full"></div>
					</div>
					<p className="text-nowrap tracking-wide">{solds} Sold</p>
				</div>
			</div>
		</motion.div>
	);
});

export default FlashSaleCard;
