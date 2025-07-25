import React, { useRef, useState } from 'react';
import BlurText from '../react-bits/BlurText/BlurText';

const VIDEO_POSTER =
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753430343/vid-2_img_quehku.webp';
const VIDEO_SRC = 'https://res.cloudinary.com/dyibkikle/video/upload/v1753430350/vid_2_lssat2.mp4';

const HeroMasoomSuccess = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoRef = useRef(null);

	return (
		<div className="SuccessHero w-full h-[90vh] relative top-0 left-0 overflow-hidden z-10">
			{/* Image placeholder */}
			{!videoLoaded && (
				<img
					src={VIDEO_POSTER}
					alt="Masoom Success video preview"
					className="w-full h-full rounded-lg object-cover absolute inset-0 z-0 transition-opacity duration-500"
					style={{ opacity: videoLoaded ? 0 : 1 }}
				/>
			)}
			{/* Video (hidden until loaded) */}
			<video
				ref={videoRef}
				src={VIDEO_SRC}
				autoPlay
				muted
				loop
				playsInline
				preload="none"
				className="h-full w-full rounded-lg overflow-hidden object-cover absolute inset-0 z-0 transition-opacity duration-500"
				style={{ opacity: videoLoaded ? 1 : 0 }}
				onLoadedData={() => setVideoLoaded(true)}
			/>
			<div className="text-white absolute bottom-8 left-0 right-0 flex flex-col z-10">
				<BlurText
					text="“ Having a vision isn’t enough. You must be willing to take action and lead to make the vision a reality ” "
					delay={100}
					animateBy="words"
					direction="bottom"
					className="qouteHero text-3xl justify-center! font-semibold tracking-wider mb-4 flex max-w-4xl mx-auto"
					style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
				/>
			</div>
		</div>
	);
};

export default HeroMasoomSuccess;
