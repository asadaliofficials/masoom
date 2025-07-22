import ScrollStack, {
	ScrollStackItem,
} from '../../components/react-bits/ScrollStack/ScrollStack.jsx';
import '../../styles/home/scrollStack.css';

const StackCards = () => (
	<ScrollStack className="h-screen w-full stackcards-noscroll">
		<ScrollStackItem itemClassName="bg-[#407AFF]">
			<div className="sub">Simplified</div>
			<div className="content">Complex tasks are now simple</div>
		</ScrollStackItem>
		<ScrollStackItem itemClassName="bg-[#DD3E58]">
			<div className="sub">Boost Productivity</div>
			<div className="content">Perform Tasks in less time</div>
		</ScrollStackItem>
		<ScrollStackItem itemClassName="bg-[#BA71F5]">
			<div className="sub">Facilitated learning</div>
			<div className="content">train anyone from anywhere</div>
		</ScrollStackItem>
		<ScrollStackItem itemClassName="bg-[#F75CD0]">
			<div className="sub">Support</div>
			<div className="content">Now its 24/7 support</div>
		</ScrollStackItem>
	</ScrollStack>
);

export default StackCards;
