import React, { useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/magnifier.css';

const ProductImageWithMagnifier = ({ src, alt, zoom = 2 }) => {
	const imgRef = useRef(null);
	const [showGlass, setShowGlass] = useState(false);
	const [glassStyle, setGlassStyle] = useState({});

	const handleMouseMove = e => {
		const { top, left, width, height } = imgRef.current.getBoundingClientRect();
		const x = e.pageX - left - window.scrollX;
		const y = e.pageY - top - window.scrollY;

		if (x < 0 || y < 0 || x > width || y > height) {
			setShowGlass(false);
			return;
		}

		setShowGlass(true);
		setGlassStyle({
			left: x - 50 + 'px', // glass radius = 50
			top: y - 50 + 'px',
			backgroundImage: `url(${src})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: `${width * zoom}px ${height * zoom}px`,
			backgroundPosition: `-${x * zoom - 50}px -${y * zoom - 50}px`,
		});
	};

	return (
		<div
			className="magnifier-container"
			onMouseMove={handleMouseMove}
			onMouseLeave={() => setShowGlass(false)}
		>
			<motion.img
				ref={imgRef}
				key={src}
				src={src}
				alt={alt}
				fetchPriority="high"
				className="object-cover w-full h-full transition-all duration-300 object-top"
				initial={{ opacity: 0.5 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0.5 }}
				transition={{ duration: 0.5 }}
			/>
			{showGlass && <div className="magnifier-glass" style={glassStyle}></div>}
		</div>
	);
};

export default ProductImageWithMagnifier;
