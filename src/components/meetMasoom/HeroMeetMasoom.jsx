import BlurText from '../react-bits/BlurText/BlurText';
const Hero = () => {
	return (
		<div className="w-full h-[90vh] relative top-0 left-0 overflow-hidden z-10">
			<video
				src="/vid/vid-1.mp4"
				autoPlay
				muted
				loop
				className="w-full h-full rounded-lg object-cover"
			/>
			<div className="text-white absolute bottom-8 right-8  flex flex-col">
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

export default Hero;
