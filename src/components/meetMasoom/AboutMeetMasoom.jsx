import ScrollReveal from '../react-bits/ScrollReveal/ScrollReveal';
import ScrollFloat from '../react-bits/ScrollFloat/ScrollFloat';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import '../../styles/home/aboutHome.css';
import { AnimatedTooltip } from '../aceternity-ui/AnimatedToolTip';

const AboutHome = () => {
	const imgRef = useRef(null);

	const center = 150;

	const x = useMotionValue(center);
	const y = useMotionValue(center);

	const rotateX = useTransform(y, [0, center * 2], [5, -5]);
	const rotateY = useTransform(x, [0, center * 2], [-5, 5]);

	const handleMouseMove = e => {
		const rect = imgRef.current.getBoundingClientRect();
		const posX = e.clientX - rect.left;
		const posY = e.clientY - rect.top;

		x.set(posX);
		y.set(posY);
	};

	const handleMouseLeave = () => {
		x.set(center);
		y.set(center);
	};
	const people = [
		{
			id: 1,
			name: 'Ava Monroe',
			designation: 'Fashion Creator & Influencer',
			image:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', // updated image URL
		},
		{
			id: 2,
			name: 'Isabella Cruz',
			designation: 'Style Icon & Entrepreneur',
			image:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 3,
			name: 'Sophia Bennett',
			designation: 'Fashion Editor & Trendsetter',
			image:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 4,
			name: 'Amelia Carter',
			designation: 'Innovative Stylist & Investor',
			image:
				'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 5,
			name: 'Victoria Rivera',
			designation: 'Creative Director & Brand Strategist',
			image:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60',
		},
		{
			id: 6,
			name: 'Olivia Sanchez',
			designation: 'Digital Fashion Entrepreneur',
			image:
				'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
		},
	];

	return (
		<div className="about-home w-full px-10 py-20  max-h-screen h-full  flex  gap-14">
			<div className="left  w-[30%] h-full flex flex-col items-center justify-center overflow-hidden">
				<motion.div
					ref={imgRef}
					initial={{ opacity: 0, scale: 0.7 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className="rounded-lg overflow-hidden w-[80%] items-center aboutHomeImg"
				>
					<motion.img
						className="w-full h-full object-cover rounded-lg"
						loading="lazy"
						src="https://res.cloudinary.com/dyibkikle/image/upload/v1753354116/aobut_img_eydpit.webp"
						alt="about img"
						style={{
							rotateX,
							rotateY,
							transformPerspective: 600,
							cursor: 'pointer',
						}}
						onMouseMove={handleMouseMove}
						onMouseLeave={handleMouseLeave}
						onMouseEnter={() => {
							x.set(center);
							y.set(center);
						}}
					/>
				</motion.div>
			</div>
			<div className="right w-[65%] h-min ">
				<ScrollFloat textClassName={'about-title text-5xl font-bold'}>About Masoom</ScrollFloat>
				<ScrollReveal
					textClassName={'about-des text-lg tracking-wide'}
					baseOpacity={0}
					enableBlur={true}
					baseRotation={0}
					blurStrength={10}
					once={false}
				>
					Since the inception of her journey, Masoom has been curating a framework to put Indian
					fashion on the world map through her content as well as entrepreneurial endeavors. Masoom
					has always had traditional roots while fostering her global reach and has collaborated
					with over 500+ brands across the globe. With prior experience in leading a business and an
					unparalleled understanding of the Indian consumer behaviour, Masoom is also an active
					angel investor in early stage startups.
				</ScrollReveal>
				<div className="flex flex-row items-center justify-start mt-12 mb-10 w-full">
					<AnimatedTooltip items={people} />
				</div>
			</div>
		</div>
	);
};

export default AboutHome;
