import Hero from '../components/meetMasoom/HeroMeetMasoom';
import AboutMeetMasoom from '../components/meetMasoom/AboutMeetMasoom';
import { DragableCardsMeet } from '../components/meetMasoom/DragableCardsMeet';
import '../styles/meetMasoom/meetMasoom.css';
import Achievements from '../components/meetMasoom/Achievements';
const MeetMasoom = () => {
	return (
		<div className=" w-full relative">
			<Hero />
			<AboutMeetMasoom />
			<DragableCardsMeet />
			<Achievements />
		</div>
	);
};

export default MeetMasoom;
