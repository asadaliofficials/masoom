import { BrowserRouter } from 'react-router-dom';
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
