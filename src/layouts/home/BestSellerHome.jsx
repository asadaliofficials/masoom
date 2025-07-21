import React from 'react';
import BestSellerCard from '../../components/home/BestSellerCard';

const BestSellerHome = () => {
	return (
		<div className='p-20 bg-gray-100 '>
			<h2 className='text-4xl font-bold tracking-wide'>Best Seller Products</h2>
			<div className='flex gap-12 mt-8'>
				<BestSellerCard />
				<BestSellerCard />
				<BestSellerCard />
				<BestSellerCard />
			</div>
		</div>
	);
};

export default BestSellerHome;
