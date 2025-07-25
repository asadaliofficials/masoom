import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/login/Login';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Products from '../pages/Products';
import ProductDetails from '../components/productDetails/ProductDeatils';
import MeetMasoom from '../pages/MeetMasoom';
import MasoomSuccess from '../pages/MasoomSuccess';
import About from '../pages/About';
import NotFound from '../components/NotFound';

const Layout = () => {
	const location = useLocation();
	const isMeetMasoom =
		location.pathname === '/meet-masoom' ||
		location.pathname === '/about' ||
		location.pathname === '/masoom-success';
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
				<Route path="masoom-success" element={<MasoomSuccess />} />
				<Route path="about" element={<About />} />
			</Route>

			{/* Route without layout */}
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RoutesConfig;
