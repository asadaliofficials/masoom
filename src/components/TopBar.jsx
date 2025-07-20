import { NavLink } from 'react-router-dom';
import '../styles/home/topBar.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
const TopBar = () => {
	// Tailwind class common for all links
	const baseClass =
		'w-max opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer font-semibold';

	return (
		<div className="topBar  w-[100%] py-1.5 px-8 flex justify-between">
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="noOneBrand text-muted"
			>
				#1 Fashion Brand in ASIA
			</motion.p>
			<div className="links flex gap-16 select-none">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="menuIcon hidden text-muted"
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
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="noOneBrandCenter hidden text-muted"
				>
					#1 Fashion Brand in ASIA
				</motion.p>
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex gap-4 "
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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="font-bold opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
				>
					<NavLink
						to="/login"
						className={({ isActive }) => (isActive ? 'font-bold opacity-100' : '')}
					>
						Login
					</NavLink>
				</motion.div>
			</div>
		</div>
	);
};

export default TopBar;
