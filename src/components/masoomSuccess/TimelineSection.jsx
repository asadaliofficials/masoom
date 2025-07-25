import React from 'react';
import { Timeline } from '../aceternityUI/Timeline';

export function TimelineSection() {
	const data = [
		{
			title: 'Anamika Khanna',
			content: (
				<div className="pb-20">
					<p className="mb-8 text-xs font-normal text-black md:text-sm">
						Masoom Minawala Mehta has built her own success story by keeping it real.
					</p>
					<div className="h-[32rem]  flex justify-stat items-center ">
						<img
							src="https://res.cloudinary.com/dyibkikle/image/upload/v1753408490/IMG_1215_ze8kn6.webp"
							alt="startup template"
							className="h-[32rem]  rounded-lg object-cover shadow-md"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Pooja Churiwala',
			content: (
				<div>
					<p className="mb-8 text-xs font-normal text-black md:text-sm">
						I write this today on a special day when Masoom hit her first Million, on Instagram! And
						to me, she will always be 1 in a million! I've been working with her for 3 years now,
						while I've been at my current role as Communications Manager at Louis Vuitton India.
						Since our first meeting to now, each conversation with her has been informative and very
						constructive. Masoom is one of the hardest workers in her industry, and always aims to
						better herself. She is full of ideas and is very creative, but also has a very sharp
						business acumen. She is humble, loving and sensitive, and I wish her the very best in
						all her wonderful initiatives and I look forward to all the amazing things we will
						continue to do together!
					</p>
					<p className="mb-8 text-xs font-normal text-black md:text-sm">
						Mauris dapibus risus quis suscipit vulputate. Egestas purus viverra accumsan in nisl
						nisi scelerisque eu ultrices.
					</p>
					<div className="h-[32rem] flex justify-start items-center">
						<img
							src="https://res.cloudinary.com/dyibkikle/image/upload/v1753408500/A5C6D370-2857-420A-9D38-A28AAE435B24_akzyd7.webp"
							alt="hero template"
							className="h-[32rem] w-120 rounded-lg object-cover shadow-md"
						/>
					</div>
				</div>
			),
		},
		{
			title: 'Anita Dongre',
			content: (
				<>
					<p className="mb-4 text-xs font-normal text-black md:text-sm">
						Masoom is one of the most compassionate and enterprising people I've met. It's promising
						to see young people like her use their power of influence to address conversations that
						can leave behind a positive impact on society.
					</p>
					<div className="h-[32rem] flex justify-start items-center">
						<img
							src="https://res.cloudinary.com/dyibkikle/image/upload/v1753411614/Banners_Recovered_-18_haydmy.webp"
							alt="hero template"
							className="h-[32rem] w-120 rounded-lg object-cover shadow-md"
						/>
					</div>
				</>
			),
		},
		{
			title: 'Sunil Sethi',
			content: (
				<>
					<p className="mb-4 text-xs font-normal text-black md:text-sm">
						Masoom has been a frontrunner in the style blogging space, securing a place globally for
						Indian textiles, fashion and lifestyle. An inspiration for many with her vibrant
						content, her biggest contribution is being able to encourage millennials to create an
						individualistic brand out of themselves. The Fashion Design Council of India supports
						her future endeavors, as the Antwerp-based influencer and entrepreneur has carved a
						distinct fashion identity.
					</p>
					<div className="h-[32rem] flex justify-start items-center">
						<img
							src="https://res.cloudinary.com/dyibkikle/image/upload/v1753412032/Suniel-Shetty_tfemov.webp"
							alt="hero template"
							className="h-[32rem] w-120 rounded-lg object-cover shadow-md"
						/>
					</div>
				</>
			),
		},
		{
			title: 'EMPOWHER',
			content: (
				<>
					<p className="mb-4 text-xs font-normal text-black md:text-sm">
						Empowher is an initiative to build and elevate women-led business and professionals.
						With Empowher, Masoom, hopes to create a space for working women and entrepreneurs to be
						able to openly talk about the problems and obstacles they face at the workplace. It is a
						way of giving back to the online community that has helped her build a career.
					</p>
					<div className="h-[32rem] flex justify-start items-center">
						<img
							src="https://res.cloudinary.com/dyibkikle/image/upload/v1753412033/_DSC6191-2_wjyjhe.webp"
							alt="hero template"
							className="h-[32rem] w-120 rounded-lg object-cover shadow-md"
						/>
					</div>
				</>
			),
		},
	];
	return (
		<div className="relative w-full overflow-clip">
			<Timeline data={data} />
		</div>
	);
}
