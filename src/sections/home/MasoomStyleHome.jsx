// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import '../../styles/home/masoomsStyle.css';

const images = [
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753165411/519856703_18516316885046014_6901259070892993505_n_evntoj.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173270/503998707_18510835648046014_5906197673367244985_n.jpg_asrjwp.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173368/497502602_18504813631046014_7210557356722184762_n.jpg_nwzn47.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173440/495969055_18503203210046014_2307338441023275932_n.jpg_c6gk1r.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173507/473007059_18480613822046014_5657879806022453802_n.jpg_ebvfyt.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173552/450080714_18445074154046014_1954353388871573738_n.jpg_bvbvwz.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173601/470947962_18478294948046014_457407360558754948_n.jpg_unp376.jpg',
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753173785/437968407_18430230757046014_7130824580980742857_n.jpg_f0qtvm.jpg',
];

// Prepare different image sets for each column:
// First column: from image index 1 to end.
const column1Images = images.slice(5).concat(images.slice(0, 5));
// Second column: from image index 4 to end then index 0 to 4.
const column2Images = images.slice(1);
// Third column: reverse order (from end to start).
const column3Images = [...images].reverse();

const MarqueeColumn = ({ images, direction = 'up', duration = 20, className = '' }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, threshold: 0.1 });
	return (
		<div ref={ref} className={`marquee-column marquee-${direction}`}>
			{isInView ? (
				<motion.div
					className={`marquee-inner ${className}`}
					animate={{
						translateY: direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'],
					}}
					transition={{
						duration: duration,
						ease: 'linear',
						repeat: Infinity,
					}}
				>
					{/* Duplicate images for seamless looping */}
					{images.concat(images).map((src, idx) => (
						<img key={idx} className="mt-4 rounded-xl w-full" src={src} alt="" />
					))}
				</motion.div>
			) : null}
		</div>
	);
};

const MasoomStyleHome = () => {
	return (
		<div className="masoomsFashion h-screen w-full flex items-center justify-center bg-gray-50">
			<div className="masoomsFashionInner flex  overflow-hidden ">
				<div className="left w-[50%] flex flex-col justify-center px-16 py-12 bg-white bg-opacity-80">
					<h1 className="title text-6xl font-extrabold text-left mb-6  text-black drop-shadow-lg">
						Masoom's Style
					</h1>
					<p className="tag text-lg text-gray-400 font-semibold mb-2">
						#Bold. #Beautiful. #Masoom.
					</p>
					<h3 className="slogen text-2xl font-bold mb-4 text-gray-600">
						Fashion that Feels Like You.
					</h3>
					<p className="des text-gray-600 text-base leading-relaxed">
						An active investor, entrepreneur, generation equality ally at UN Women India, global
						influencer and creator, Masoom wants to leave no stone unturned in creating a
						sustainable & responsible ecosystem for the future creators and entrepreneurs of the
						world.
					</p>
				</div>
				<div className="right w-[50%] gap-4 pr-4 h-full flex items-center justify-center bg-white">
					{/* Left Column (up) with images starting from index 1 */}
					<MarqueeColumn images={column1Images} direction="up" duration={20} />
					{/* Center Column (down) with images from index 4 to end then 0 to 4 */}
					<MarqueeColumn images={column2Images} direction="down" duration={28} />
					{/* Right Column (up) with reversed images */}
					<MarqueeColumn
						images={column3Images}
						direction="up"
						duration={26}
						className="offset-first"
					/>
				</div>
			</div>
		</div>
	);
};

export default MasoomStyleHome;
