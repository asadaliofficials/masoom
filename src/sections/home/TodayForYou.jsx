import React from 'react';
import TodayForYouCard from '../../components/home/TodayForYouCard';

const TodayForYou = () => {
	return (
		<div className="today-for-you  p-12">
			<h2 className="heading text-4xl font-bold tracking-wide">Today's For You!</h2>
      <div className="TodayForYouCards flex flex-wrap gap-4 mt-8 justify-center">
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
