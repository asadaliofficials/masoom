import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className="app max-w-[1440px] bg-white">
					<TopBar />
					<hr style={{ opacity: '0.4' }} />
					<Home />
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
