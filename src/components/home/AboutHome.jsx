import ScrollReveal from '../react-bits/ScrollReveal/ScrollReveal';
import ScrollFloat from '../react-bits/ScrollFloat/ScrollFloat';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../../styles/aboutHome.css';
const AboutHome = () => {
	const imgRef = useRef(null);

	// Assume image size roughly 300x300; adjust if needed
	const center = 150;

	// Initialize motion values at center (no tilt)
	const x = useMotionValue(center);
	const y = useMotionValue(center);

	// Subtle tilt max ±5 degrees
	const rotateX = useTransform(y, [0, center * 2], [5, -5]);
	const rotateY = useTransform(x, [0, center * 2], [-5, 5]);

	const handleMouseMove = e => {
		const rect = imgRef.current.getBoundingClientRect();
		const posX = e.clientX - rect.left;
		const posY = e.clientY - rect.top;

		x.set(posX);
		y.set(posY);
	};

	const handleMouseLeave = () => {
		// Reset tilt to center (no rotation)
		x.set(center);
		y.set(center);
	};

	return (
		<div className="about-home bg-gray-50   w-full p-10 max-h-screen h-full  flex  gap-14">
			<div className="left  w-[30%] h-full flex flex-col items-center overflow-hidden">
				<motion.div
					ref={imgRef}
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="rounded-lg mb-2 overflow-hidden w-[80%] aboutHomeImg"
				>
					<motion.img
						className="w-full h-full object-cover rounded-lg"
						loading="lazy"
						src="https://images.squarespace-cdn.com/content/v1/61dfb87e2c156a1e80b21579/4a4b8ab5-5d61-4f39-9ed2-8a93547e6648/Masoom+Minawala.PNG"
						alt="about img"
						style={{
							rotateX,
							rotateY,
							transformPerspective: 600,
							cursor: 'pointer',
						}}
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						onMouseEnter={() => {
							x.set(center);
							y.set(center);
						}}
					/>
				</motion.div>

				<motion.div
					className="socialButtons flex  items-center  pl-2 gap-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.3 }}
					transition={{ duration: 0.6 }}
				>
					{' '}
					<ul className="wrapper  ">
						<li className="icon youtube">
							<span className="tooltip">YouTube</span>
							<svg
								fill="currentColor"
								height="1.5em"
								viewBox="0 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>youtube</title>
								<path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
							</svg>
						</li>
						<li className="icon facebook">
							<span className="tooltip">Facebook</span>
							<svg
								viewBox="0 0 320 512"
								height="1.2em"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
							</svg>
						</li>
						<li className="icon x">
							<span className="tooltip">X.com</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.5em"
								fill="currentColor"
								viewBox="0 0 50 50"
							>
								<path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
							</svg>
						</li>
						<li className="icon instagram">
							<span className="tooltip">Instagram</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="1.2em"
								fill="currentColor"
								className="bi bi-instagram"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
							</svg>
						</li>
					</ul>
				</motion.div>
			</div>
			<div className="right w-[65%] h-min ">
				<ScrollFloat textClassName={'about-title text-5xl font-bold'}>Masoom MinaWala</ScrollFloat>
				<ScrollReveal
					textClassName={'about-des text-2xl'}
					baseOpacity={0}
					enableBlur={true}
					baseRotation={0}
					blurStrength={10}
					once={true}
				>
					Content creator for over a decade, former CEO of an e-commerce start-up, and a champion of
					women empowerment, Masoom Minawala is one of the first creators of the now rapidly-growing
					global influencer industry. From being a front-runner in transforming the creator economy
					& representing India on global platforms to leading a company in the pre-amazon era in
					India, Masoom’s ability to adapt & lead in this digital-first era has put her on Forbes
					Asia’s 30 Under 30 list, GQ’s Most Influential Young Indians, HSBC's list of leading
					female entrepreneurs worldwide as well as CNN's '20 under 40' list.
				</ScrollReveal>
				<motion.div
					className="buttons flex  items-center  pl-2 mt-12 gap-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.5 }}
					transition={{ duration: 0.6 }}
				>
					<button className="active:scale-90 w-max relative inline-block px-4 py-3 font-semibold text-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span className="absolute inset-0 w-full h-full bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
							Meet Masoom
						</span>
					</button>
					<button className="active:scale-90 relative inline-block px-4 py-3 font-semibold text-white bg-black border border-black rounded-2xl cursor-pointer overflow-hidden group transition-all duration-300 ease-in-out">
						<span className="absolute inset-0 w-full h-full bg-white transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
						<span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
							Masoom's Success
						</span>
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutHome;
