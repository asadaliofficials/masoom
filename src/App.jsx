// App.jsx
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig.jsx';
import ProductsContext from './context/ProductsContext.js';
import Products from './context/store.js';

const App = () => {
	return (
		<ProductsContext.Provider value={Products}>
			<BrowserRouter>
				<div className="app max-w-[1440px] bg-white">
					<RoutesConfig />
				</div>
			</BrowserRouter>
		</ProductsContext.Provider>
	);
};

export default App;
