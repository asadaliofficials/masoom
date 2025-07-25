import React from 'react';
import { DraggableCardBody, DraggableCardContainer } from '../aceternityUI/DragableCard.jsx';

export function DragableCardsMeet() {
	const items = [
		{
			title: 'Urban Chic',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753165411/519856703_18516316885046014_6901259070892993505_n_evntoj.jpg',
			className: 'absolute top-10 left-[20%] rotate-[-5deg]',
		},
		{
			title: 'Minimal Muse',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173270/503998707_18510835648046014_5906197673367244985_n.jpg_asrjwp.jpg',
			className: 'absolute top-40 left-[25%] rotate-[-7deg]',
		},
		{
			title: 'Nordic Elegance',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173370/497502602_18504813631046014_7210557356722184762_n.jpg_w74zyi.jpg',
			className: 'absolute top-5 left-[40%] rotate-[8deg]',
		},
		{
			title: 'Tokyo Streetwear',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173440/495969055_18503203210046014_2307338441023275932_n.jpg_c6gk1r.jpg',
			className: 'absolute top-32 left-[55%] rotate-[10deg]',
		},
		{
			title: 'Scandinavian Cool',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173508/473007059_18480613822046014_5657879806022453802_n.jpg_ywyf66.jpg',
			className: 'absolute top-20 right-[35%] rotate-[2deg]',
		},
		{
			title: 'Boho Luxe',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173601/470947962_18478294948046014_457407360558754948_n.jpg_unp376.jpg',
			className: 'absolute top-24 left-[45%] rotate-[-7deg]',
		},
		{
			title: 'Casual Icon',
			image:
				'https://res.cloudinary.com/dyibkikle/image/upload/v1753173785/437968407_18430230757046014_7130824580980742857_n.jpg_f0qtvm.jpg',
			className: 'absolute top-8 left-[30%] rotate-[4deg]',
		},
	];

	return (
		<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
			<p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
				Want to stand out in public? Your style starts at our store.
			</p>
			{items.map(item => (
				<DraggableCardBody className={item.className}>
					<img
						src={item.image}
						alt={item.title}
						loading="lazy"
						className="pointer-events-none relative z-10 h-80 w-80 object-cover"
					/>
					<h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
						{item.title}
					</h3>
				</DraggableCardBody>
			))}
		</DraggableCardContainer>
	);
}
