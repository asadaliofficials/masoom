import ScrollStack, {
	ScrollStackItem,
} from '../../components/react-bits/ScrollStack/ScrollStack.jsx';
const StackCards = () => {
	return (
		<div className="p-15 h-screen w-full overflow-hidden">
			<ScrollStack>
				<ScrollStackItem itemClassName="bg-[#5227FF]">
					<h2>Card 1</h2>
					<p>This is the first card in the stack</p>
				</ScrollStackItem>
				<ScrollStackItem itemClassName="bg-[#F01E9C]">
					<h2>Card 2</h2>
					<p>This is the second card in the stack</p>
				</ScrollStackItem>
				<ScrollStackItem itemClassName="bg-[#5227FF]">
					<h2>Card 3</h2>
					<p>This is the third card in the stack</p>
				</ScrollStackItem>
			</ScrollStack>
		</div>
	);
};

export default StackCards;
