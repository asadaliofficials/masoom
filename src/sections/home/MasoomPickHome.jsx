// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../../styles/home/masoomspick.css';

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

const MarqueeColumn = ({ images, direction = 'up', duration = 20 }) => (
	<div className={`marquee-column marquee-${direction}`}>
		<div className="marquee-inner" style={{ animationDuration: `${duration}s` }}>
			{/* Duplicate images for seamless looping */}
			{images.concat(images).map((src, idx) => (
				<img key={idx} className="mt-4 rounded-xl w-full" src={src} alt="" />
			))}
		</div>
	</div>
);

const MasoomPickHome = () => {
	return (
		<div className="h-[95vh] reen w-full flex items-center justify-center bg-gray-50">
			<div className="flex w-[90vw] h-[90vh] rounded-3xl shadow-2xl overflow-hidden">
				<div className="left w-[50%] flex flex-col justify-center px-16 py-12 bg-white bg-opacity-80">
					<h1 className="text-6xl font-extrabold text-left mb-6 tracking-tight text-black drop-shadow-lg">
						Masoom's Pick
					</h1>
					<p className="text-lg text-gray-400 font-semibold mb-2">#Bold. #Beautiful. #Masoom.</p>
					<h3 className="text-2xl font-bold mb-4 text-gray-600">Fashion that Feels Like You.</h3>
					<p className="text-gray-600 text-base leading-relaxed">
						An active investor, entrepreneur, generation equality ally at UN Women India, global
						influencer and creator, Masoom wants to leave no stone unturned in creating a
						sustainable & responsible ecosystem for the future creators and entrepreneurs of the
						world.
					</p>
				</div>
				<div className="right w-[50%] gap-4 pr-4 h-full flex items-center justify-center bg-white">
					{/* Left Column (up) */}
					<MarqueeColumn images={images} direction="up" duration={22} />
					{/* Center Column (down) */}
					<MarqueeColumn images={images} direction="down" duration={26} />
					{/* Right Column (up) */}
					<MarqueeColumn images={images} direction="up" duration={24} />
				</div>
			</div>
		</div>
	);
};

export default MasoomPickHome;
