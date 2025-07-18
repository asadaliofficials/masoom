import React from 'react';
import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className="app max-w-[1440px]">
					<TopBar />
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
