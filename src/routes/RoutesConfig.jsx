import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/login/login';
import Footer from '../components/Footer';
import Nav from '../components/Nav.jsx';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Nav />
						<Home />
						<Footer />
					</>
				}
			/>

			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default RoutesConfig;
