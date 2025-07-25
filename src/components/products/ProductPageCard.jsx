import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../../styles/products/productCard.css';

const ProductPageCard = memo(({ product }) => {
	const navigate = useNavigate();
	const img =
		product?.images?.[0] ||
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png';
	const title =
		product?.title ||
		'Speed and Water Proof Shoes best for sports and swimming and it has too long title';
	const price = product?.price || 1500;
	const oldPrice = product?.oldPrice || 2500;
	const rating = product?.rating || 4.8;
	const solds = product?.solds || '4K';

	const handleClick = () => {
		if (product?.id) {
			navigate(`/product/${product.id}`);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 20 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
			className="ProductPageCard rounded-lg flex flex-col w-[230px] flex-shrink-0 h-[300px] shadow-xl bg-white border-b border-gray-300 cursor-pointer"
			onClick={handleClick}
		>
			<div className="w-full h-[60%] flex items-center justify-center relative select-none">
				<img
					loading="lazy"
					className="w-full h-full object-cover rounded-t-lg object-top"
					src={img}
					alt={title}
				/>
			</div>

			<div className="flex flex-col h-full p-2">
				<h1 className="title text-sm font-semibold leading-1 line-clamp-2">{title}</h1>
				<div className="flex px-1 text-xs mt-1 gap-1 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
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
				<div className="flex gap-1 mt-1 items-center pl-1">
					<p className="text-lg font-bold">Rs. {price}</p>
					<p className="line-through text-gray-400 font-semibold text-xs">Rs. {oldPrice}</p>
				</div>
			</div>
		</motion.div>
	);
});

export default ProductPageCard;
