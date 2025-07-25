// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import CircularGallery from '../react-bits/CircularGallery/CircularGallery';
const PressSection = () => {
	return (
		<div className="w-full pt-20 pb-10 bg-[#f7f7fa]">
			<h2 className="text-4xl font-bold text-center text-gray-900 tracking-wide">In The Press</h2>
			<div style={{ height: '600px', position: 'relative' }}>
				<CircularGallery bend={1.5} textColor="#000" borderRadius={0.05} scrollEase={0.04} />
			</div>
		</div>
	);
};

export default PressSection;
