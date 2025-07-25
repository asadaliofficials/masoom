import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const achievementData = [
	'Featured in Forbes Asia’s 30 Under 30, GQ’s Most Influential Young.',
	'Walked the Cannes Film Festival red carpet three years in a row.',
	'Generation Equality Ally at UN Women India to drive change and create an equal world.',
	'Proud council member of Women India Chamber of Commerce & Industry.',
	'Speaker at TEDx in 2019.',
];

const Achievements = () => {
	return (
		<section className="py-16 px-6">
			<div className="max-w-4xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-4xl font-extrabold text-gray-800 mb-12"
				>
					Achievements
				</motion.h2>
				<div className="grid grid-cols-1 gap-8">
					{achievementData.map((text, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -5 }} // 👈 Slide up on hover
							viewport={{ once: true }}
							transition={{ duration: 0.3 }}
							className="relative bg-white p-6 rounded-xl shadow-lg flex items-center cursor-pointer transition-all"
						>
							{index !== 110 && (
								<span className="absolute left-4 text-3xl text-blue-500 select-none">➦</span>
							)}
							<p className={`text-lg text-gray-700 ${index !== 1100 ? 'ml-10' : ''}`}>{text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Achievements;
