import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import '../../styles/home/todayForYou.css';

const TodayForYouCard = memo(({ product, delay = 0, isFav, onFavToggle }) => {
	const navigate = useNavigate();
	const img =
		product?.images?.[0] ||
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png';
	const title =
		product?.title ||
		'Speed and Water Proof Shoes best for sports and swimming and it has too long title';
	const price = product?.price || 1500;
	const oldPrice = product?.oldPrice || 2500;
	const discount = product?.discount || 40;
	const rating = product?.rating || 4.8;
	const solds = product?.solds || '4K';
	const id = product?.id;

	const handleFavClick = e => {
		e.stopPropagation();
		onFavToggle();
		if (!isFav) {
			toast.success('Added to Favourite!', { position: 'bottom-right', autoClose: 1800 });
		}
	};

	const handleClick = () => {
		if (id) navigate(`/product/${id}`);
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: 20 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.3, ease: 'easeInOut', delay: delay }}
			className="todayForYouCard group rounded-lg flex flex-col w-[250px] flex-shrink-0 h-[320px] shadow-lg bg-white border-b border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
			onClick={handleClick}
		>
			<div className="flex-1 w-full flex items-center justify-center relative select-none overflow-hidden rounded-t-lg">
				<img
					loading="lazy"
					className="w-full h-full object-cover rounded-t-lg object-center transition-transform duration-300 group-hover:scale-105"
					src={img}
					alt={title}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<motion.div
					className="bg-white absolute top-1 p-1 rounded-full right-1 cursor-pointer shadow"
					onClick={handleFavClick}
					whileTap={{ scale: 0.85 }}
					whileHover={{ scale: 1.1 }}
				>
					<svg width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<motion.path
							key={isFav ? 'liked' : 'unliked'}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: 'spring', stiffness: 100, damping: 15 }}
							d="M28.343,17.48L16,29  L3.657,17.48C1.962,15.898,1,13.684,1,11.365v0C1,6.745,4.745,3,9.365,3h0.17c2.219,0,4.346,0.881,5.915,2.45L16,6l0.55-0.55  C18.119,3.881,20.246,3,22.465,3h0.17C27.255,3,31,6.745,31,11.365v0C31,13.684,30.038,15.898,28.343,17.48z"
							fill={isFav ? '#FF2056' : 'transparent'}
							stroke={isFav ? '#FF2056' : 'black'}
							strokeLinejoin="round"
							strokeMiterlimit="10"
							strokeWidth="3"
						/>
					</svg>
				</motion.div>
			</div>

			<div className="w-full px-3 py-3">
				<h1 className="title text-sm font-semibold leading-1 line-clamp-2 cursor-pointer mb-1">
					{title}
				</h1>
				<div className="flex px-1 text-sm mt-1 gap-1 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 16 16"
						fill="#FFC107"
					>
						<path
							d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 
  4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
						/>
					</svg>
					{rating} ● {solds} Sold
				</div>
				<div className="flex gap-1 mt-1 items-center pl-1 mb-3">
					<p className="text-lg font-bold text-black">Rs. {price}</p>
					<p className="line-through text-gray-400 font-semibold text-sm">Rs. {oldPrice}</p>
					<span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
						{discount}% OFF
					</span>
				</div>
			</div>
		</motion.div>
	);
});

export default TodayForYouCard;
