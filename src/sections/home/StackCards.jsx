import React, { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/home/scrollStack.css';

const projects = [
	{
		title: 'Matthias Leidinger',
		description:
			'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
		src: 'rock.jpg',
		link: 'https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/',
		color: '#373737',
	},
	{
		title: 'Clément Chapillon',
		description:
			'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).',
		src: 'tree.jpg',
		link: 'https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/',
		color: '#977F6D',
	},
	{
		title: 'Zissou',
		description:
			'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.',
		src: 'water.jpg',
		link: 'https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/',
		color: '#373737',
	},
	{
		title: 'Mathias Svold and Ulrik Hasemann',
		description:
			'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.',
		src: 'house.jpg',
		link: 'https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/',
		color: '#977F6D',
	},
	{
		title: 'Mark Rammers',
		description:
			'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.',
		src: 'cactus.jpg',
		link: 'https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/',
		color: '#373737',
	},
];

const CardStack = () => {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	useEffect(() => {
		// Smooth scroll polyfill (optional, for smoother effect)
		// You can add a library or custom code here if needed
	}, []);

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
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	});
	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div ref={container} className="cardstack-cardContainer">
			<motion.div
				style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
				className="cardstack-card"
			>
				<h2>{title}</h2>
				<div className="cardstack-body">
					<div className="cardstack-description">
						<p>{description}</p>
						<span>
							<a href={link} target="_blank" rel="noopener noreferrer">
								See more
							</a>
							<svg
								width="22"
								height="12"
								viewBox="0 0 22 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
									fill="black"
								/>
							</svg>
						</span>
					</div>
					<div className="cardstack-imageContainer">
						<motion.div className="cardstack-inner" style={{ scale: imageScale }}>
							<img
								src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1e780ee-b4e3-4511-aef8-c68a1012a6b9/WMNS+JORDAN+CMFT+ERA.png"
								alt="card visual"
								className="cardstack-img"
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default CardStack;
