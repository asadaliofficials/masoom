import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ScrollStack, {
	ScrollStackItem,
} from '../src/components/react-bits/ScrollStack/ScrollStack.jsx';
const App = () => {
	return (
		<>
	<BrowserRouter>
				<div className="app max-w-[1440px] bg-white overflow-x-hidden	">
					<TopBar />
					<hr style={{ opacity: '0.3' }} />
					<Home />
				</div>
			</BrowserRouter> 
		
		</>
	);
};

export default App;
