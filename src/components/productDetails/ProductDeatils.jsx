import React, { useState } from 'react';

const product = {
	title: 'Speed and Water Proof Shoes',
	images: [
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png',
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/1.jpg',
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2.jpg',
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3.jpg',
		'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/4.jpg',
	],
	sold: '10k',
	rating: 4.8,
	reviews: 188,
	price: 1500,
	oldPrice: 2500,
	discount: 25,
	colors: [
		{ name: 'Red', value: '#ef4444' },
		{ name: 'Blue', value: '#3b82f6' },
		{ name: 'Green', value: '#22c55e' },
		{ name: 'Black', value: '#000000' },
	],
	sizes: ['S', 'M', 'L', 'XL'],
};

const ProductDeatils = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

	return (
		<div className="w-full min-h-screen bg-gray-50 p-6">
			{/* Breadcrumb */}
			<nav className="text-sm text-gray-500 mb-6">
				<ol className="list-reset flex items-center gap-2">
					<li>
						<a href="/" className="hover:underline text-blue-500">
							Home
						</a>
					</li>
					<li>&gt;</li>
					<li>
						<a href="/products" className="hover:underline text-blue-500">
							Product
						</a>
					</li>
					<li>&gt;</li>
					<li className="truncate max-w-[120px] text-gray-700 font-semibold">{product.title}</li>
				</ol>
			</nav>
			{/* Main Section */}
			<div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg p-6">
				{/* Left: Images */}
				<div className="flex flex-col items-center w-full md:w-[45%]">
					<div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-4">
						<img
							src={product.images[selectedImage]}
							alt={product.title}
							className="object-contain w-full h-full transition-all duration-300"
						/>
					</div>
					<div className="flex gap-3 w-full justify-center">
						{product.images.slice(0, 4).map((img, idx) => (
							<button
								key={img}
								onClick={() => setSelectedImage(idx)}
								className={`w-16 h-16 rounded-md border-2 ${
									selectedImage === idx ? 'border-blue-500' : 'border-gray-200'
								} overflow-hidden bg-white flex items-center justify-center transition-all`}
							>
								<img src={img} alt="thumb" className="object-contain w-full h-full" />
							</button>
						))}
					</div>
				</div>
				{/* Right: Details */}
				<div className="flex-1 flex flex-col gap-4">
					{/* Title */}
					<h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
					{/* Stats */}
					<div className="flex items-center gap-3 text-gray-500 text-sm">
						<span>{product.sold} sold</span>
						<span>●</span>
						<span className="flex items-center gap-1">
							<svg width="16" height="16" fill="#FFC107" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
							</svg>
							{product.rating}
						</span>
						<span>●</span>
						<span>{product.reviews} Reviews</span>
					</div>
					{/* Price */}
					<div className="flex items-center gap-4">
						<span className="text-2xl font-bold text-blue-600">Rs: {product.price}</span>
					</div>
					{/* Old Price and Discount */}
					<div className="flex items-center gap-4">
						<span className="line-through text-red-500 text-lg">Rs: {product.oldPrice}</span>
						<span className="text-green-600 font-semibold bg-green-50 px-2 py-1 rounded">
							{product.discount}% off
						</span>
					</div>
					{/* Colors */}
					<div className="flex items-center gap-3 mt-2">
						<span className="font-medium text-gray-700">Colors:</span>
						{product.colors.map(color => (
							<button
								key={color.value}
								onClick={() => setSelectedColor(color.value)}
								className={`w-7 h-7 rounded-full border-2 ${
									selectedColor === color.value ? 'border-blue-500' : 'border-gray-300'
								}`}
								style={{ backgroundColor: color.value }}
								aria-label={color.name}
							/>
						))}
					</div>
					{/* Sizes */}
					<div className="flex items-center gap-3 mt-2">
						<span className="font-medium text-gray-700">Sizes:</span>
						{product.sizes.map(size => (
							<button
								key={size}
								onClick={() => setSelectedSize(size)}
								className={`px-3 py-1 rounded border-2 font-semibold transition-all ${
									selectedSize === size
										? 'border-blue-500 bg-blue-50 text-blue-700'
										: 'border-gray-300 bg-white text-gray-700'
								} hover:border-blue-400`}
							>
								{size}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDeatils;
