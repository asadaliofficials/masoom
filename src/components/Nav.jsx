import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../styles/home/navbar.css';

const baseClass =
	'w-max opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer font-semibold';

const Nav = ({ count1 = 33, count2 = 5 }) => {
	const cartCount = count1 > 9 ? '9+' : count1;
	const favCount = count2 > 9 ? '9+' : count2;
	const [showNav, setShowNav] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.pageYOffset;
			if (currentScrollY > lastScrollY.current) {
				// scrolling down, hide nav
				setShowNav(false);
			} else {
				// scrolling up, show nav
				setShowNav(true);
			}
			lastScrollY.current = currentScrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			initial={{ y: 0 }}
			animate={{ y: showNav ? 0 : '-100%' }}
			transition={{ duration: 0.5 }}
			className="border-b-2 border-gray-300 nav sticky top-0 bg-white z-100 py-3 px-4 flex w-full justify-between items-center"
		>
			<div className="logoWraper flex justify-center items-center gap-3 rounded-lg px-2 py-1">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="menuIcon hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M4 12h16" />
						<path d="M4 18h16" />
						<path d="M4 6h16" />
					</svg>
				</motion.div>
				{/* logo */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="logo flex items-center gap-1"
				>
					<img src="/images/logo.png" width="40px" alt="logo" />
					<h1 className="webLogotext font-bold tracking-wide select-none">MASOOM</h1>
				</motion.div>
			</div>
			<motion.ul
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex gap-4 linksList"
			>
				<NavLink
					to="/"
					end
					className={({ isActive }) => `${baseClass} ${isActive ? 'font-bold opacity-100' : ''}`}
				>
					Home
				</NavLink>
				<NavLink
					to="/products"
					className={({ isActive }) => `${baseClass} ${isActive ? 'font-bold opacity-100' : ''}`}
				>
					Products
				</NavLink>
				<NavLink
					to="/meet-masoom"
					className={({ isActive }) => `${baseClass} ${isActive ? 'font-bold opacity-100' : ''}`}
				>
					Meet Masoom
				</NavLink>
				<NavLink
					to="/masoom-success-story"
					className={({ isActive }) => `${baseClass} ${isActive ? 'font-bold opacity-100' : ''}`}
				>
					Masoom's Success
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => `${baseClass} ${isActive ? 'font-bold opacity-100' : ''}`}
				>
					About us
				</NavLink>
			</motion.ul>
			<div className="flex gap-2 navIconsParent">
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="relative"
				>
					{count1 > 0 && (
						<span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white text-sm font-bold rounded-full px-1.5 h-5 min-w-[20px] flex items-center justify-center">
							{favCount}
						</span>
					)}
					<div className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer transition-all duration-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-heart-icon lucide-heart"
						>
							<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
						</svg>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="relative"
				>
					{count2 > 0 && (
						<span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white text-sm font-bold rounded-full px-1.5 h-5 min-w-[20px] flex items-center justify-center">
							{cartCount}
						</span>
					)}
					<div className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
						>
							<circle cx="8" cy="21" r="1" />
							<circle cx="19" cy="21" r="1" />
							<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
						</svg>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
					className="loginButton font-bold opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer flex justify-center items-center ml-6 px-3 rounded-lg bg-black text-white hover:text-black hover:bg-white border-2 border-black"
				>
					<NavLink
						to="/login"
						className={({ isActive }) => (isActive ? 'font-bold opacity-100' : '')}
					>
						Login
					</NavLink>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Nav;
