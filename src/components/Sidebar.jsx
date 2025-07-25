import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/products', label: 'Products' },
	{ to: '/meet-masoom', label: 'Meet Masoom' },
	{ to: '/masoom-success', label: "Masoom's Success" },
	{ to: '/about', label: 'About us' },
];

const sidebarVariants = {
	hidden: { x: '-100%' },
	visible: { x: 0 },
	exit: { x: '-100%' },
};

const Sidebar = ({ open, onClose }) => {
	return (
		<AnimatePresence>
			{open && (
				<motion.aside
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={sidebarVariants}
					transition={{ type: 'tween', duration: 0.4 }}
					className="fixed top-0 left-0 h-full w-full max-w-[400px] bg-white text-gray-900 z-[200] shadow-xl flex flex-col"
					style={{ boxShadow: '2px 0 16px rgba(0,0,0,0.08)' }}
				>
					<div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
						<span className="text-xl font-bold tracking-wide">Menu</span>
						<button
							onClick={onClose}
							className="text-2xl font-bold text-gray-700 hover:text-black focus:outline-none"
							aria-label="Close sidebar"
						>
							&times;
						</button>
					</div>
					<nav className="flex flex-col gap-2 px-6 py-6">
						{navLinks.map(link => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`block py-3 px-4 rounded-lg text-lg font-medium transition-colors duration-200 ${
										isActive ? 'bg-gray-100 text-black font-bold' : 'hover:bg-gray-50 text-gray-800'
									}`
								}
								onClick={onClose}
							>
								{link.label}
							</NavLink>
						))}
					</nav>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};

export default Sidebar;
