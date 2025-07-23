import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/login/login';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Products from '../pages/Products';
import ProductDetails from '../components/productDetails/ProductDeatils';

const Layout = () => {
	return (
		<>
			<Nav />
			<main>
				<Outlet /> {/* Renders the matched child route */}
			</main>
			<Footer />
		</>
	);
};

const RoutesConfig = () => {
	return (
		<Routes>
			{/* Common Layout */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="product/:id" element={<ProductDetails />} />
			</Route>

			{/* Route without layout */}
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default RoutesConfig;
