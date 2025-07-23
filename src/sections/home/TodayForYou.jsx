import React from 'react';
import TodayForYouCard from '../../components/home/TodayForYouCard';
import '../../styles/home/todayForYou.css';
const TodayForYou = () => {
	return (
		<div className="today-for-you  p-12">
			<h2 className="heading text-3xl font-bold tracking-wide">Today's For You!</h2>
			<div className="TodayForYouCards flex flex-wrap gap-8 mt-10 justify-center">
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
				<TodayForYouCard />
			</div>
		</div>
	);
};

export default TodayForYou;
