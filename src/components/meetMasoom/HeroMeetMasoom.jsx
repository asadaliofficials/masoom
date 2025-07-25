import React, { useRef, useState } from 'react';
import BlurText from '../react-bits/BlurText/BlurText';

const VIDEO_POSTER =
	'https://res.cloudinary.com/dyibkikle/image/upload/v1753430343/vid_1_img_gz8dbv.webp';
const VIDEO_SRC = 'https://res.cloudinary.com/dyibkikle/video/upload/v1753430349/vid_1_f1jj82.mp4';

const HeroMeetMasoom = () => {
	const [videoLoaded, setVideoLoaded] = useState(false);
	const videoRef = useRef(null);

	return (
		<div className="w-full h-[90vh] relative top-0 left-0 overflow-hidden z-10">
			{/* Image placeholder */}
			{!videoLoaded && (
				<img
					src={VIDEO_POSTER}
					alt="Masoom video preview"
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
				className="w-full h-full rounded-lg object-cover absolute inset-0 z-0 transition-opacity duration-500"
				style={{ opacity: videoLoaded ? 1 : 0 }}
				onLoadedData={() => setVideoLoaded(true)}
			/>
			<div className="text-white absolute bottom-8 right-8 flex flex-col z-10">
				<BlurText
					text="CREATOR."
					delay={100}
					animateBy="letters"
					direction="bottom"
					className="text-5xl font-semibold tracking-wider mb-4 flex"
				/>
				<BlurText
					text="GLOBAL INFLUENCER."
					delay={100}
					animateBy="letters"
					direction="bottom"
					className="text-5xl font-semibold tracking-wider mb-4"
				/>
				<BlurText
					text="ENTREPRENEUR."
					delay={100}
					animateBy="letters"
					direction="bottom"
					className="text-5xl font-semibold tracking-wider mb-4"
				/>
				<BlurText
					text="INVESTOR."
					delay={100}
					animateBy="letters"
					direction="bottom"
					className="text-5xl font-semibold tracking-wider mb-4"
				/>
			</div>
		</div>
	);
};

export default HeroMeetMasoom;
