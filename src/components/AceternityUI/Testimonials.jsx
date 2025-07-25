'use client';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

import { useEffect, useState } from 'react';

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
	const [active, setActive] = useState(0);

	const handleNext = () => {
		setActive(prev => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActive(prev => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const isActive = index => {
		return index === active;
	};

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	return (
		<div className="mx-auto max-w-sm px-4 py-20 font-sans h-screen flex flex-col justify-center antialiased md:max-w-4xl md:px-8 lg:px-12">
			<div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index) ? 0 : randomRotateY(),
										zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: 'easeInOut',
									}}
									className="absolute inset-0 origin-bottom"
								>
									<img
										src={testimonial.src}
										alt={testimonial.name}
										width={500}
										height={500}
										draggable={false}
										className="h-full w-full rounded-3xl object-cover object-center"
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
				<div className="flex flex-col justify-between py-4">
					<motion.div
						key={active}
						initial={{
							y: 20,
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{
							y: -20,
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
							ease: 'easeInOut',
						}}
					>
						<h3 className="text-2xl font-bold text-black dark:text-white">
							{testimonials[active].name}
						</h3>
						<p className="text-md text-black font-semibold tracking-wide">
							{testimonials[active].designation}
						</p>
						<motion.p className="mt-8 text-lg text-gray-700">
							{testimonials[active].quote.split(' ').map((word, index) => (
								<motion.span
									key={index}
									initial={{
										filter: 'blur(10px)',
										opacity: 0,
										y: 5,
									}}
									animate={{
										filter: 'blur(0px)',
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.2,
										ease: 'easeInOut',
										delay: 0.02 * index,
									}}
									className="inline-block"
								>
									{word}&nbsp;
								</motion.span>
							))}
						</motion.p>
					</motion.div>
					<div className="flex gap-4 pt-12 md:pt-0">
						<button
							onClick={handlePrev}
							className="group/button flex cursor-pointer h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-arrow-left-short"
								viewBox="0 0 16 16"
								className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
							>
								<path
									fill-rule="evenodd"
									d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
								/>
							</svg>
						</button>
						<button
							onClick={handleNext}
							className="group/button cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-arrow-right-short"
								viewBox="0 0 16 16"
								className="h-6 w-6 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
							>
								<path
									fill-rule="evenodd"
									d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
