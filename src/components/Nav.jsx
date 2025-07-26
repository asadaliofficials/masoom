import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../styles/home/navbar.css';
import Sidebar from './Sidebar';
import Cart from './Cart'; // Add this import

const baseClass =
	'w-max opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer font-semibold';

const Nav = ({ hideNavIcons = false }) => {
	const [cartCount, setCartCount] = useState(0);
	const [showNav, setShowNav] = useState(true);
	const lastScrollY = useRef(0);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	// Update cart count from localStorage
	const updateCartCount = () => {
		try {
			const cart = JSON.parse(localStorage.getItem('cart')) || [];
			const total = cart.reduce(sum => sum + 1, 0);
			setCartCount(total);
		} catch {
			setCartCount(0);
		}
	};

	useEffect(() => {
		updateCartCount();
	}, []);

	// Update when cart is opened/closed
	useEffect(() => {
		if (!cartOpen) updateCartCount();
	}, [cartOpen]);

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

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		setIsLoggedIn(user && user.isLoggedIn);
	}, []);
	useEffect(() => {
		const update = () => updateCartCount();
		window.addEventListener('cartUpdated', update);
		return () => window.removeEventListener('cartUpdated', update);
	}, []);
	return (
		<>
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: showNav ? 0 : '-100%' }}
				transition={{ duration: 0.5 }}
				className={`border-b-2 border-gray-300 nav sticky top-0 z-100 py-3 px-4 flex w-full justify-between items-center bg-white`}
			>
				<div className="logoWraper flex justify-center items-center gap-3 rounded-lg px-2 py-1">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="menuIcon hidden cursor-pointer"
						onClick={() => setSidebarOpen(true)}
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
						to="/masoom-success"
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
						initial={{ opacity: 0, x: 60 }}
						animate={hideNavIcons ? { opacity: 0, x: 60 } : { opacity: 1, x: 0 }}
						transition={{ duration: 0.4 }}
						className="relative"
					>
						{cartCount > 0 && (
							<span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-gray-500 text-white text-sm font-bold rounded-full z-50 px-1.5 h-5 min-w-[20px] flex items-center justify-center">
								{cartCount > 9 ? '9+' : cartCount}
							</span>
						)}
						<div
							className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-4xl cursor-pointer"
							onClick={() => setCartOpen(true)}
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
								className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
							>
								<circle cx="8" cy="21" r="1" />
								<circle cx="19" cy="21" r="1" />
								<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
							</svg>
						</div>
					</motion.div>

					{!isLoggedIn && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={hideNavIcons ? { opacity: 0 } : { opacity: 1 }}
							transition={{ duration: 0.4 }}
							className="loginButton font-bold opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer flex justify-center items-center ml-6 px-3 rounded-lg bg-black text-white hover:text-black hover:bg-white border-2 border-black"
						>
							<NavLink
								to="/login"
								className={({ isActive }) => (isActive ? 'font-bold opacity-100' : '')}
							>
								Login
							</NavLink>
						</motion.div>
					)}
					{isLoggedIn && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={hideNavIcons ? { opacity: 0 } : { opacity: 1 }}
							transition={{ duration: 0.4 }}
							className="loginButton font-bold opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer flex justify-center items-center ml-6 px-3 rounded-lg "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								version="1.1"
								width="32"
								height="32"
								viewBox="0 0 256 256"
								xml:space="preserve"
							>
								<g
									style={{ stroke: 'none', fill: 'none', opacity: 1 }}
									transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
								>
									<path
										d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z"
										style={{ stroke: 'none', fill: 'black', opacity: 1 }}
										strokeLinecap="round"
									/>
								</g>
							</svg>
						</motion.div>
					)}
				</div>
			</motion.div>
			<Cart open={cartOpen} onClose={() => setCartOpen(false)} productsList={[]} />
			<Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
		</>
	);
};

export default Nav;
