// components/NotFound.jsx
import React from 'react';

const NotFound = () => {
	return (
		<div className="min-h-screen bg-white flex items-center justify-center p-4">
			<div className="flex flex-col md:flex-row items-center max-w-4xl w-full gap-8">
				{/* Image on left - replace src with your image */}
				<div className="w-full md:w-1/2 flex justify-center">
					<img
						src="https://res.cloudinary.com/dyibkikle/image/upload/v1753416871/404_Pixar_Animation_Studios_jghzlv.jpg"
						alt="404 Illustration"
						className="max-w-xs w-full h-auto"
					/>
				</div>

				{/* Text on right */}
				<div className="w-full md:w-1/2">
					<h1 className="text-2xl sm:text-3xl font-medium">Awww...Don't Cry.</h1>
					<h2 className="text-xl sm:text-2xl mt-2">It's just a 404 Error!</h2>
					<p className="mt-4 text-gray-700">
						What you're looking for may have been misplaced
						<br />
						in Long Term Memory.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
