import React from 'react';

const TopBar = () => {
	return (
		<>
			<div className="py-1 px-8 border-b-2 border-[#F2F2F2] flex justify-between">
				<p className="text-muted">#1 Brand of Fashion in ASIA</p>
				<div className="flex gap-4 select-none">
					<ul className="flex gap-4 ">
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							Home
						</li>
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							Products
						</li>
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							Meet Masoom
						</li>
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							Masoom's Success
						</li>
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							Press
						</li>
						<li className="opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
							About us
						</li>
						|
					</ul>
					<div className="font-bold opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer">
						Login
					</div>
				</div>
			</div>
		</>
	);
};

export default TopBar;
