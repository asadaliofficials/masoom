// App.jsx
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig.jsx';
import ProductsContext from './context/ProductsContext.js';
import Products from './context/store.js';
import { ToastContainer } from 'react-toastify';
const App = () => {
	return (
		<ProductsContext.Provider value={Products}>
			<BrowserRouter>
				<div className="app max-w-[1440px] bg-white">
					<RoutesConfig />
				</div>
				<ToastContainer />
			</BrowserRouter>
		</ProductsContext.Provider>
	);
};

export default App;
