import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/home/scrollStack.css';

const projects = [
	{
		title: 'Free Delivery',
		description:
			'Get your orders delivered to your doorstep at no extra cost. Shop more, save more with our free delivery service. Enjoy the convenience of fast, reliable shipping on every purchase. With our commitment to customer satisfaction, you can shop with confidence knowing that delivery charges are never a concern.',
		link: 'https://res.cloudinary.com/dyibkikle/image/upload/v1753291280/Adobe_Express_-_file_k3ekyc.webp',
		color: '#38bdf8',
	},
	{
		title: 'Membership Card',
		description:
			'Become a member and enjoy exclusive discounts, early access to sales, and special rewards tailored just for you. Unlock a world of benefits designed to enhance your shopping journey, including personalized offers, priority customer support, and invitations to members-only events.',
		link: 'https://res.cloudinary.com/dyibkikle/image/upload/v1753291642/fetchpik.com-iconscout-uQ962hvTVP_quyblu.png',
		color: '#fb923c',
	},
	{
		title: 'Extended Warranty',
		description:
			'Extend the protection of your products with our comprehensive warranty plans for peace of mind. Safeguard your purchases against unexpected issues and enjoy hassle-free repairs or replacements when needed. Our extended warranty ensures that you can use your products worry-free.',
		link: 'https://res.cloudinary.com/dyibkikle/image/upload/v1753291280/10117751_lewgb4.webp',
		color: '#38bdf8',
	},
	{
		title: 'Easy Installments',
		description:
			'Split your payments into easy monthly installments and enjoy shopping without financial stress. Our flexible payment options allow you to purchase what you need now and pay over time, making budgeting simpler and more manageable.',
		link: 'https://res.cloudinary.com/dyibkikle/image/upload/v1753291280/12484933_kme920.webp',
		color: '#fb923c',
	},
	{
		title: 'Easy Return Policy',
		description:
			'Shop confidently with our hassle-free return policy. If you’re not satisfied, returning is simple and quick. We prioritize your satisfaction by offering a straightforward process for returns and exchanges.',
		link: 'https://res.cloudinary.com/dyibkikle/image/upload/v1753291281/return-product-3d-icon-download-in-png-blend-fbx-gltf-file-formats--box-package-parcel-ecommerce-pack-e-commerce-shopping-icons-10053368_om8el2.webp',
		color: '#38bdf8',
	},
];

const CardStack = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {}, []);

	return (
		<main ref={container} className="cardstack-main">
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.05;
				const range = [i * 0.25, 1];
				return (
					<Card
						key={`p_${i}`}
						i={i}
						{...project}
						progress={scrollYProgress}
						range={range}
						targetScale={targetScale}
					/>
				);
			})}
		</main>
	);
};

function Card({ i, title, description, link, color, progress, range, targetScale }) {
	const container = useRef(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div ref={container} className="cardstack-cardContainer">
			<motion.div
				style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
				className="cardstack-card"
			>
				<h2 className="text-3xl uppercase tracking-wider text-white font-bold">{title}</h2>
				<div className="cardstack-body">
					<div className="cardstack-description">
						<p className="text-md text-white tracking-wide">{description}</p>
					</div>
					<div className="cardstack-imageContainer">
						<motion.div className="cardstack-inner">
							<img src={link} className="cardstack-img" loading="lazy" alt="img" />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default CardStack;
