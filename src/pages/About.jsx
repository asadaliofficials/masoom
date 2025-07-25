import React from 'react';
import { Boxes } from '../components/aceternityUI/BackgroundBoxes';
import { cn } from '../utils/tailwindMerger';
const About = () => {
	return (
		<>
			<div className="h-[80vh] relative w-full overflow-x-hidden overflow-y-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
				<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<Boxes />
				<h1 className={cn('md:text-4xl text-xl text-white relative z-20')}>
					At Masoom, fashion is more than just fabric — it's a feeling.
				</h1>
				<p className="text-center mt-2 text-neutral-300 relative z-20 max-w-4xl mt-8">
					Inspired by the elegance of timeless South Asian style and the confidence of modern global
					fashion, Masoom blends purity, grace, and strength into every thread. Our name, derived
					from the word *Masoom* (innocent and pure-hearted), reflects the essence of who we are:
					bold in vision, soft in soul.
				</p>
			</div>
		</>
	);
};

export default About;
