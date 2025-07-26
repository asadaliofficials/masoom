import Hero from '../components/masoomSuccess/HeroMasoomSuccess';
import PressSection from '../components/masoomSuccess/PressSection';
import { TimelineSection } from '../components/masoomSuccess/TimelineSection';
import { TestimonialsSection } from '../components/masoomSuccess/TestimonialsSection';
import '../styles/masoomSuccess/masoomSuccess.css';
const MasoomSuccess = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<PressSection />
			<TimelineSection />
			<TestimonialsSection />
		</div>
	);
};

export default MasoomSuccess;
