import React from 'react';
import BestSellerCard from '../../components/home/BestSellerCard';
import '../../styles/home/bestSeller.css';

const BestSellerHome = () => {
	return (
		<div className='bestSeller p-20 bg-gray-100 '>
			<h2 className='heading text-4xl font-bold tracking-wide'>Best Seller Products</h2>
			<div className='bestSellerCards flex gap-12 mt-8 justify-center'>
				<BestSellerCard />
				<BestSellerCard />
				<BestSellerCard />
				<BestSellerCard />
			</div>
		</div>
	);
};

export default BestSellerHome;
