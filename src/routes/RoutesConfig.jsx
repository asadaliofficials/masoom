import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/login/login';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const RoutesConfig = () => {
	return (
		<Routes>
			{/* Combine TopBar + Home in one element */}
			<Route
				path="/"
				element={
					<>
						<TopBar />
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
