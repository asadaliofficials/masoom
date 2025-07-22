import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ScrollStack, {
	ScrollStackItem,
} from '../src/components/react-bits/ScrollStack/ScrollStack.jsx';
import Login from './components/login/login.jsx';
import RoutesConfig from './routes/RoutesConfig.jsx';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className="app max-w-[1440px] bg-white	">
				 <RoutesConfig />
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
