import BlurText from '../react-bits/BlurText/BlurText';
const Hero = () => {
	return (
		<div className="SuccessHero w-full h-[90vh] relative top-0 left-0 overflow-hidden z-10">
			<video
				src="/vid/vid-2.mp4"
				autoPlay
				muted
				loop
				className=" h-full w-full rounded-lg overflow-hidden object-cover"
			/>
			<div className="text-white absolute bottom-8 left-0 right-0 flex flex-col">
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

export default Hero;
