const AboutHome = () => {
	return (
		<div className="about-home bg-red-500 h-screen mt-1 w-full p-14 flex items-center justify-between">
			<div className="left w-[35%] p-8 bg-green-400 h-full flex items-center justify-center">
				<img
					loading="lazy"
					width=""
					src="https://images.squarespace-cdn.com/content/v1/61dfb87e2c156a1e80b21579/4a4b8ab5-5d61-4f39-9ed2-8a93547e6648/Masoom+Minawala.PNG"
					alt=""
				/>
			</div>
			<div className="right bg-yellow-400">
				<h1 className="text-4xl font-bold text-white mb-4">About Masoom</h1>
			</div>
		</div>
	);
};

export default AboutHome;
