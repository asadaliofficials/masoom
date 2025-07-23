import React, { useState } from 'react';
import Counter from '../../components/react-bits/Counter/Counter'; // Adjust import if Counter is elsewhere
import { motion } from 'framer-motion';

const product = {
	title:
		'Speed and Water Proof Shoes, what if the tiltle is ttoo long and it is not fitting in the space',
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
		{ name: 'Ruby Red', value: '#0a0a0a' }, // Deep, luxurious red — powerful for dresses & heels
		{ name: 'Electric Fuchsia', value: '#06b6d4' }, // Bold, trendy pink-purple — perfect for standout pieces
		{ name: 'Cobalt Blue', value: '#22c55e' }, // Striking and elegant — amazing on both shoes and gowns
		{ name: 'Emerald Green', value: '#fb923c' }, // Classic bold green — works for fashion-forward items
		{ name: 'Jet Black', value: '#d946ef' }, // Timeless deep black — ideal for premium leather or formal wear
	],
	sizes: ['S', 'M', 'L', 'XL', 'XXL'],
};

const ProductDeatils = () => {
	const [fav, setFav] = useState(false);

	const [selectedImage, setSelectedImage] = useState(0);
	const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
	const [count, setCount] = useState(1);

	return (
		<div className="w-full min-h-screen bg-gray-50 p-6">
			{/* Breadcrumb */}
			<nav className="text-sm text-gray-400 mb-6">
				<ol className="list-reset flex items-center gap-2">
					<li>Home</li>
					<li>&gt;</li>
					<li>Product</li>
					<li>&gt;</li>
					<li className="truncate  text-gray-500 font-semibold">{product.title}</li>
				</ol>
			</nav>
			{/* Main Section */}
			<div className="flex flex-col md:flex-row gap-10 bg-white rounded-xl shadow-lg p-6 py-10">
				{/* Left: Images */}
				<div className="flex flex-col items-center w-full md:w-[35%]">
					<div className="relative w-full max-h-[380px] aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-4">
						<img
							src={product.images[selectedImage]}
							alt={product.title}
							className="object-cover w-full h-full transition-all duration-300"
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
								<img src={img} alt="thumb" className="object-cover w-full h-full" />
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
						<span className="font-semibold">{product.sold} sold</span>
						<span>●</span>
						<span className="flex items-center gap-1">
							<svg width="16" height="16" fill="#FFC107" viewBox="0 0 16 16">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
							</svg>
							<span className="font-semibold">{product.rating}</span>
						</span>
						<span>●</span>
						<span className="font-semibold">{product.reviews} Reviews</span>
					</div>
					{/* Price */}
					<div className="flex items-center gap-4">
						<span className="text-3xl font-extrabold text-black">Rs: {product.price}</span>
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
									selectedColor === color.value ? 'border-black' : 'border-gray-300'
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
										? 'border-black bg-black text-white'
										: 'border-black bg-white text-black'
								} hover:border-black`}
							>
								{size}
							</button>
						))}
					</div>
					{/* Action Buttons Row */}
					<div className="flex items-center  gap-6 mt-4">
						{/* Left: Quantity Selector */}
						<div className="flex shadow-sm bg-gray-200 px-1 py-1 rounded-lg justify-center items-center gap-2">
							<div
								onClick={() => setCount(prev => Math.max(0, prev - 1))}
								className="h-[32px] w-[32px] bg-white flex justify-center items-center rounded-lg cursor-pointer"
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
								onClick={() => setCount(prev => prev + 1)}
								className="h-[32px] w-[32px] bg-white flex justify-center items-center rounded-lg cursor-pointer"
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
						{/* Right: Fav and Share Buttons, icon-only, no bg/border/shadow */}
						<div className="flex items-center gap-6">
							<button className="group p-0 m-0 flex items-center justify-center gap-1 cursor-pointer border border-black rounded px-4 py-1.5 bg-white text-black font-semibold transition-all hover:bg-black hover:text-white">
								<svg
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.3591 12.7315C19.9891 12.7315 19.6791 12.4515 19.6391 12.0815C19.3991 9.88154 18.2191 7.90154 16.3991 6.64154C16.0691 6.41154 15.9891 5.96154 16.2191 5.63154C16.4491 5.30154 16.8991 5.22154 17.2291 5.45154C19.3991 6.96154 20.7991 9.32154 21.0891 11.9315C21.1291 12.3315 20.8391 12.6915 20.4391 12.7315C20.4091 12.7315 20.3891 12.7315 20.3591 12.7315Z"
										fill="#292D32"
									/>
									<path
										d="M3.73931 12.7812C3.71931 12.7812 3.68931 12.7812 3.66931 12.7812C3.26931 12.7412 2.97931 12.3812 3.01931 11.9812C3.28931 9.37118 4.66931 7.01118 6.81931 5.49118C7.13931 5.26118 7.59931 5.34118 7.82931 5.66118C8.05931 5.99118 7.97931 6.44118 7.65931 6.67118C5.85931 7.95118 4.68931 9.93118 4.46931 12.1212C4.42931 12.5012 4.10931 12.7812 3.73931 12.7812Z"
										fill="#292D32"
									/>
									<path
										d="M15.9906 21.1003C14.7606 21.6903 13.4406 21.9903 12.0606 21.9903C10.6206 21.9903 9.25059 21.6703 7.97059 21.0203C7.61059 20.8503 7.47059 20.4103 7.65059 20.0503C7.82059 19.6903 8.26059 19.5503 8.62059 19.7203C9.25059 20.0403 9.92059 20.2603 10.6006 20.3903C11.5206 20.5703 12.4606 20.5803 13.3806 20.4203C14.0606 20.3003 14.7306 20.0903 15.3506 19.7903C15.7206 19.6203 16.1606 19.7603 16.3206 20.1303C16.5006 20.4903 16.3606 20.9303 15.9906 21.1003Z"
										fill="#292D32"
									/>
									<path
										d="M12.0505 2.01172C10.5005 2.01172 9.23047 3.27172 9.23047 4.83172C9.23047 6.39172 10.4905 7.65172 12.0505 7.65172C13.6105 7.65172 14.8705 6.39172 14.8705 4.83172C14.8705 3.27172 13.6105 2.01172 12.0505 2.01172Z"
										fill="#292D32"
									/>
									<path
										d="M5.05047 13.8711C3.50047 13.8711 2.23047 15.1311 2.23047 16.6911C2.23047 18.2511 3.49047 19.5111 5.05047 19.5111C6.61047 19.5111 7.87047 18.2511 7.87047 16.6911C7.87047 15.1311 6.60047 13.8711 5.05047 13.8711Z"
										fill="#292D32"
									/>
									<path
										d="M18.9509 13.8711C17.4009 13.8711 16.1309 15.1311 16.1309 16.6911C16.1309 18.2511 17.3909 19.5111 18.9509 19.5111C20.5109 19.5111 21.7709 18.2511 21.7709 16.6911C21.7709 15.1311 20.5109 13.8711 18.9509 13.8711Z"
										fill="#292D32"
									/>
								</svg>
								<span className="text-sm font-semibold">Share</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Product Details Section */}
			<div className="mt-10 bg-white rounded-xl shadow-lg p-6">
				<h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
				<p className="text-gray-700 mb-6 leading-relaxed">
					Discover the perfect blend of quality, comfort, and style with our carefully curated
					products. Each item in our collection is designed to meet the highest standards, ensuring
					you enjoy both durability and elegance in your everyday life. Whether you're dressing up
					for a special occasion or seeking reliable essentials for daily wear, our range offers
					something for everyone. Experience premium craftsmanship, attention to detail, and
					materials that feel as good as they look. Our products are made to adapt to your
					lifestyle, providing versatility and timeless appeal. Enjoy peace of mind with thoughtful
					features and a commitment to your satisfaction. Elevate your wardrobe and home with pieces
					that are as unique as you are, and let every purchase reflect your personal taste and
					confidence.
					<br />
					<br />
					We believe in creating products that not only look great but also enhance your daily
					experience. Our designs are inspired by the latest trends and timeless classics, ensuring
					you always have access to the best of both worlds. Sustainability and ethical sourcing are
					at the heart of our process, so you can feel good about every purchase. With a focus on
					user comfort, intuitive functionality, and long-lasting performance, our products are
					tested to withstand the demands of modern life. Our dedicated customer support team is
					always here to help, making your satisfaction our top priority. Choose us for a seamless
					blend of innovation, reliability, and style—crafted for those who value quality in every
					detail.
					<br />
				</p>
				<ul className="text-gray-700 space-y-2">
					<li>
						<span className="font-semibold text-gray-600">Available Sizes:</span> S, M, L, XL, XXL
						(varies by product)
					</li>
					<li>
						<span className="font-semibold text-gray-600">Color Options:</span> Multiple classic and
						trendy colors to suit your style
					</li>
					<li>
						<span className="font-semibold text-gray-600">Material:</span> High-quality,
						comfortable, and durable fabrics or materials
					</li>
					<li>
						<span className="font-semibold text-gray-600">Warranty:</span> Standard 6-month
						manufacturer warranty on all products
					</li>
					<li>
						<span className="font-semibold text-gray-600">Care Instructions:</span> Easy to
						maintain—refer to product label for best results
					</li>
					<li>
						<span className="font-semibold text-gray-600">Country of Origin:</span> Proudly made
						with global standards
					</li>
					<li>
						<span className="font-semibold text-gray-600">Shipping:</span> Free and fast shipping
						options available
					</li>
					<li>
						<span className="font-semibold text-gray-600">Returns & Exchanges:</span> Hassle-free
						returns and exchanges for your convenience
					</li>
					<li>
						<span className="font-semibold text-gray-600">Payment Methods:</span> Secure checkout
						with multiple payment options (COD, credit/debit, etc.)
					</li>
					<li>
						<span className="font-semibold text-gray-600">Customer Support:</span> 24/7 support to
						assist you anytime
					</li>
					<li>
						<span className="font-semibold text-gray-600">Size & Fit Guide:</span> Detailed guides
						to help you find your perfect fit
					</li>
				</ul>
			</div>
			{/* Reviews Section */}
			<div className="mt-10 bg-white rounded-xl shadow-lg p-6">
				<h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
				{/* Top: Total reviews and average rating */}
				<div className="flex flex-col md:flex-row md:items-center max-w-2xl md:justify-between gap-4 mb-6">
					<div className="flex items-center gap-3">
						<span className="text-4xl font-extrabold text-yellow-400 flex items-center">
							4.8
							<svg width="32" height="32" fill="#FFC107" viewBox="0 0 16 16" className="ml-1">
								<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
							</svg>
						</span>
						<span className="text-lg text-gray-600 font-semibold">188 Reviews</span>
					</div>

				</div>
				{/* Rating breakdown */}
				<div className="mb-8 space-y-2 max-w-2xl">
					{[5, 4, 3, 2, 1].map(star => (
						<div key={star} className="flex items-center gap-2">
							<span className="flex items-center text-sm w-16">
								{Array.from({ length: star }).map((_, i) => (
									<svg key={i} width="16" height="16" fill="#FFC107" viewBox="0 0 16 16">
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
									</svg>
								))}
							</span>
							{/* Bar */}
							<div className="flex-1 h-3 bg-gray-200 rounded overflow-hidden">
								<div
									className={`h-full rounded ${
										star === 5
											? 'bg-yellow-400 w-4/5'
											: star === 4
											? 'bg-yellow-300 w-1/6'
											: star === 3
											? 'bg-yellow-200 w-1/12'
											: star === 2
											? 'bg-yellow-100 w-1/24'
											: 'bg-gray-100 w-1/36'
									}`}
								></div>
							</div>
							<span className="text-gray-500 text-xs w-8 text-right">
								{star === 5 ? 120 : star === 4 ? 40 : star === 3 ? 15 : star === 2 ? 8 : 5}
							</span>
						</div>
					))}
				</div>
				{/* Review list */}
				<div className="space-y-8">
					{/* Example review 1 */}
					<div className="flex gap-4">
						<img
							src="https://randomuser.me/api/portraits/men/32.jpg"
							alt="User"
							className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
						/>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-gray-800">Ali Raza</span>
								<span className="text-xs text-gray-400">2 days ago</span>
								<span className="flex items-center ml-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 mt-1">
								Absolutely loved the quality and comfort! Delivery was super fast and the packaging
								was beautiful. Will definitely shop again.
							</p>
							<div className="flex gap-4 mt-2 items-center text-sm">
								<button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
									<svg
										width="16"
										height="16"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
									</svg>{' '}
									12
								</button>
								<button className="text-blue-500 hover:underline">Reply</button>
							</div>
							{/* Nested reply */}
							<div className="ml-8 mt-3 border-l-2 border-gray-100 pl-4">
								<div className="flex items-center gap-2">
									<img
										src="https://randomuser.me/api/portraits/women/44.jpg"
										alt="User"
										className="w-8 h-8 rounded-full object-cover border border-gray-200"
									/>
									<span className="font-semibold text-gray-800">Sara Khan</span>
									<span className="text-xs text-gray-400">1 day ago</span>
								</div>
								<p className="text-gray-700 mt-1 text-sm">
									Thank you for your feedback! We’re glad you loved it.
								</p>
							</div>
						</div>
					</div>
					{/* Example review 2 */}
					<div className="flex gap-4">
						<img
							src="https://randomuser.me/api/portraits/women/65.jpg"
							alt="User"
							className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
						/>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-gray-800">Mehwish Noor</span>
								<span className="text-xs text-gray-400">3 days ago</span>
								<span className="flex items-center ml-2">
									{Array.from({ length: 4 }).map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 mt-1">
								Nice product, fits well. Customer support was helpful when I had a question about
								sizing.
							</p>
							<div className="flex gap-4 mt-2 items-center text-sm">
								<button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
									<svg
										width="16"
										height="16"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
									</svg>{' '}
									7
								</button>
								<button className="text-blue-500 hover:underline">Reply</button>
							</div>
							{/* Nested reply */}
							<div className="ml-8 mt-3 border-l-2 border-gray-100 pl-4">
								<div className="flex items-center gap-2">
									<img
										src="https://randomuser.me/api/portraits/men/53.jpg"
										alt="User"
										className="w-8 h-8 rounded-full object-cover border border-gray-200"
									/>
									<span className="font-semibold text-gray-800">Store Team</span>
									<span className="text-xs text-gray-400">2 days ago</span>
								</div>
								<p className="text-gray-700 mt-1 text-sm">
									We appreciate your review and are happy you found the right size!
								</p>
							</div>
						</div>
					</div>
					{/* Example review 3 */}
					<div className="flex gap-4">
						<img
							src="https://randomuser.me/api/portraits/men/77.jpg"
							alt="User"
							className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
						/>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-gray-800">Bilal Ahmed</span>
								<span className="text-xs text-gray-400">1 week ago</span>
								<span className="flex items-center ml-2">
									{Array.from({ length: 5 }).map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 mt-1">
								Excellent! The product exceeded my expectations. Highly recommended for anyone
								looking for quality.
							</p>
							<div className="flex gap-4 mt-2 items-center text-sm">
								<button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
									<svg
										width="16"
										height="16"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
									</svg>{' '}
									15
								</button>
								<button className="text-blue-500 hover:underline">Reply</button>
							</div>
						</div>
					</div>
					{/* Example review 4 */}
					<div className="flex gap-4">
						<img
							src="https://randomuser.me/api/portraits/women/21.jpg"
							alt="User"
							className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
						/>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-gray-800">Ayesha Malik</span>
								<span className="text-xs text-gray-400">2 weeks ago</span>
								<span className="flex items-center ml-2">
									{Array.from({ length: 3 }).map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 mt-1">
								Good but delivery took a bit longer than expected. Product is as described.
							</p>
							<div className="flex gap-4 mt-2 items-center text-sm">
								<button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
									<svg
										width="16"
										height="16"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
									</svg>{' '}
									3
								</button>
								<button className="text-blue-500 hover:underline">Reply</button>
							</div>
						</div>
					</div>
					{/* Example review 5 */}
					<div className="flex gap-4">
						<img
							src="https://randomuser.me/api/portraits/men/12.jpg"
							alt="User"
							className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
						/>
						<div className="flex-1">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-gray-800">Usman Tariq</span>
								<span className="text-xs text-gray-400">3 weeks ago</span>
								<span className="flex items-center ml-2">
									{Array.from({ length: 2 }).map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFC107" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.276 6.765c-.33-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.08 4.327 4.898.696c.441.062.612.636.283.95l-3.421 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 mt-1">
								Average experience. The product is okay for the price.
							</p>
							<div className="flex gap-4 mt-2 items-center text-sm">
								<button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
									<svg
										width="16"
										height="16"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
									</svg>{' '}
									1
								</button>
								<button className="text-blue-500 hover:underline">Reply</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDeatils;
