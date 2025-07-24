import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/login/login';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Products from '../pages/Products';
import ProductDetails from '../components/productDetails/ProductDeatils';
import MeetMasoom from '../pages/MeetMasoom';

const Layout = () => {
	const location = useLocation();
	const isMeetMasoom = location.pathname === '/meet-masoom';

	return (
		<>
			<Nav isMeetMasoom={isMeetMasoom} />
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
				<Route path="meet-masoom" element={<MeetMasoom />} />
			</Route>

			{/* Route without layout */}
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default RoutesConfig;
