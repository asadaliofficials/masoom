import React from 'react';
import { cn } from '../utils/tailwindMerger';
import '../styles/about/about.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
	return (
		<>
			{/* Section 1: Keep as is */}
			<div
				className="aboutHeroBG h-[80vh] relative w-full overflow-x-hidden overflow-y-hidden rounded-lg flex flex-col items-center justify-center"
				style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
			>
				{/* Decorative SVG pattern overlay */}
				<svg
					className="absolute inset-0 w-full h-full z-10"
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
					style={{ pointerEvents: 'none' }}
				>
					<defs>
						<pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
							<circle cx="2" cy="2" r="2" fill="#334155" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#dots)" />
				</svg>
				<div className="aboutHeroBGtext absolute inset-0 w-full h-full bg-slate-900/60 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				<h1 className={cn('md:text-4xl text-center text-xl text-white relative z-20')}>
					At Masoom, fashion is more than just fabric — it's a feeling.
				</h1>
				<p className="text-center  text-neutral-300 relative z-20 max-w-4xl mt-8">
					Inspired by the elegance of timeless South Asian style and the confidence of modern global
					fashion, Masoom blends purity, grace, and strength into every thread. Our name, derived
					from the word *Masoom* (innocent and pure-hearted), reflects the essence of who we are:
					bold in vision, soft in soul.
				</p>
			</div>

			{/* Section 2: What We Stand For */}
			<section className="w-full flex flex-col items-center justify-center px-4 pb-16 mt-12">
				<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
					What We Stand For
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
					{[
						{
							icon: '🌸',
							title: 'Authenticity',
							desc: 'We celebrate real stories, real people, and real style. Every collection is a tribute to individuality and self-love.',
							border: 'border-pink-400',
						},
						{
							icon: '🤝',
							title: 'Empowerment',
							desc: 'Our mission is to uplift and empower—whether through our designs, our community, or our message of confidence and courage.',
							border: 'border-blue-400',
						},
						{
							icon: '🌏',
							title: 'Inclusivity',
							desc: 'We believe fashion is for everyone. Our collections are designed to embrace diversity and celebrate all walks of life.',
							border: 'border-green-400',
						},
					].map(item => (
						<motion.div
							key={item.title}
							className={`bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 ${item.border}`}
							whileHover={{ y: -8, scale: 1.03 }}
							transition={{ type: 'spring', stiffness: 200, damping: 18 }}
						>
							<span className="text-4xl mb-4">{item.icon}</span>
							<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
							<p className="text-neutral-600">{item.desc}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Section 3: Meet the Founder */}
			<section className="w-full flex flex-col items-center justify-center px-4 pb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
					Meet the Founder
				</h2>
				<div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-8 gap-8 border-t-4 border-yellow-400">
					<img
						src="https://res.cloudinary.com/dyibkikle/image/upload/v1753205286/fg_zz4kbr.webp"
						alt="Masoom Minawala Mehta"
						className="w-40 h-40 rounded-full object-cover border-4 border-yellow-300 shadow-md mb-4 md:mb-0"
					/>
					<div className="flex-1 flex flex-col items-center md:items-start">
						<h3 className="text-2xl font-bold mb-2 text-slate-800">Masoom Minawala Mehta</h3>
						<p className="text-neutral-700 text-center md:text-left mb-2">
							Founder & Creative Director
						</p>
						<p className="text-neutral-600 text-center md:text-left">
							Masoom is a global influencer, entrepreneur, and advocate for women’s empowerment. Her
							vision for Masoom is rooted in celebrating individuality, blending tradition with
							innovation, and creating a platform where every voice is heard. Through her journey,
							she continues to inspire countless individuals to embrace their true selves and make a
							positive impact on the world.
						</p>
					</div>
				</div>
			</section>

			{/* Section 4: What People Say About Us */}
			<section className="w-full flex flex-col items-center justify-center px-4 pb-20">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
					What People Say About Us
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
					{[
						{
							name: 'Priya Sharma',
							comment:
								'Absolutely love the style! Every piece from Masoom makes me feel confident and unique. The attention to detail is just incredible.',
						},
						{
							name: 'Amit Verma',
							comment:
								'Feels premium and unique. I have never experienced such comfort and elegance in one brand before. Masoom is my new favorite.',
						},
						{
							name: 'Sneha Patel',
							comment:
								'Always get compliments! The designs are so fresh and vibrant, and I love how they blend tradition with modern trends.',
						},
						{
							name: 'Rahul Singh',
							comment:
								'My go-to for every occasion. Whether it’s a wedding or a casual outing, Masoom always has something perfect for me.',
						},
						{
							name: 'Anjali Mehta',
							comment:
								'So comfortable and chic. I appreciate the inclusivity and the empowering message behind every collection.',
						},
						{
							name: 'Karan Malhotra',
							comment:
								'Empowering and fresh. Masoom’s mission of uplifting others truly shines through their work and community.',
						},
						{
							name: 'Riya Kapoor',
							comment:
								'Great quality, great vibes. The fabrics are soft, the fits are flattering, and the customer service is fantastic.',
						},
						{
							name: 'Arjun Desai',
							comment:
								'Modern, yet rooted in tradition. I love how Masoom celebrates Indian heritage while keeping things contemporary.',
						},
						{
							name: 'Meera Joshi',
							comment:
								'Makes me feel confident. The brand story is inspiring and I feel proud to wear Masoom.',
						},
						{
							name: 'Dev Patel',
							comment:
								'Always on-trend! I look forward to every new launch and have never been disappointed.',
						},
						{
							name: 'Simran Kaur',
							comment:
								'Customer service is top-notch. I feel valued and heard every time I shop with Masoom.',
						},
						{
							name: 'Vikram Sethi',
							comment:
								'Perfect for gifting. My friends and family always love receiving something from Masoom.',
						},
						{
							name: 'Neha Dhawan',
							comment:
								'Love the brand story. It’s more than just fashion—it’s about empowerment and self-expression.',
						},
						{
							name: 'Siddharth Rao',
							comment:
								'Stylish and empowering. Masoom has helped me embrace my own style with confidence.',
						},
						{
							name: 'Pooja Chawla',
							comment:
								'Fashion made easy. The website is easy to use and the delivery is always prompt.',
						},
					].map((t, i) => (
						<motion.div
							key={i}
							className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start gap-2 border border-neutral-200 hover:shadow-md transition-shadow"
							whileHover={{ y: -8, scale: 1.03 }}
							transition={{ type: 'spring', stiffness: 200, damping: 18 }}
						>
							<span className="italic text-base text-black mb-2">{t.comment}</span>
							<span className="font-semibold text-black text-sm mt-auto">— {t.name}</span>
						</motion.div>
					))}
				</div>
			</section>

			{/* Section 5: Newsletter / Get In Touch */}
			<section className="w-full flex flex-col items-center justify-center px-4 pb-24">
				<div className="max-w-2xl w-full bg-white rounded-xl shadow border border-neutral-200 flex flex-col items-center p-10 gap-6">
					<h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-2">
						Stay in the Loop
					</h2>
					<p className="text-lg text-black text-center mb-4">
						Subscribe to our newsletter for the latest updates, exclusive offers, and inspiring
						stories from the Masoom community.
					</p>
					<form className="w-full flex flex-col sm:flex-row items-center gap-4">
						<input
							type="email"
							required
							placeholder="Enter your email address"
							className="flex-1 px-5 py-3 rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-black text-base"
						/>
						<button
							type="submit"
							className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
						>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default About;
