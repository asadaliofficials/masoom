import React, { useEffect } from 'react';
import '../../styles/login.css';

const Login = () => {
	useEffect(() => {
		const container = document.querySelector('.loginContainer');
		const registerBtn = document.querySelector('.register-btn');
		const loginBtn = document.querySelector('.login-btn');
		if (registerBtn && loginBtn && container) {
			registerBtn.addEventListener('click', () => {
				container.classList.add('active');
			});
			loginBtn.addEventListener('click', () => {
				container.classList.remove('active');
			});
		}
		// Cleanup
		return () => {
			if (registerBtn && loginBtn) {
				registerBtn.removeEventListener('click', () => {});
				loginBtn.removeEventListener('click', () => {});
			}
		};
	}, []);

	return (
		<div className="w-full max-w-[1200px] mx-auto my-auto h-screen overflow-y-hidden  flex justify-center items-center ">
			<div className="loginContainer w-screen flex justify-center items-center h-screen ">
				<div className="form-box login w-screen ">
					<form action="#">
						<h1 className="font-bold">Login</h1>
						<div className="input-box">
							<input type="text" placeholder="Username" required />
							<span className="icon-placeholder absolute right-4 top-4">
								<svg
									width="20"
									height="20"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
										fill="#000000"
									/>
									<path
										d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
										fill="#000000"
									/>
								</svg>
							</span>
						</div>
						<div className="input-box">
							<input type="password" placeholder="Password" required />
							<span className="icon-placeholder  absolute right-4 top-4">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5.5 10V7C5.5 5.27609 6.18482 3.62279 7.40381 2.40381C8.62279 1.18482 10.2761 0.5 12 0.5C13.7239 0.5 15.3772 1.18482 16.5962 2.40381C17.8152 3.62279 18.5 5.27609 18.5 7V10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13C2 11.3431 3.34315 10 5 10H5.5ZM9.52513 4.52513C10.1815 3.86875 11.0717 3.5 12 3.5C12.9283 3.5 13.8185 3.86875 14.4749 4.52513C15.1313 5.1815 15.5 6.07174 15.5 7V10H8.5V7C8.5 6.07174 8.86875 5.1815 9.52513 4.52513Z"
										fill="#000000"
									/>
								</svg>
							</span>
						</div>
						<div className="forgot-link">
							<a href="#">Forgot Password?</a>
						</div>
						<button type="submit" className="btn">
							Login
						</button>
						<p>or login with social platforms</p>
						<div className="social-icons">
							<a href="#">
								<span className="icon-placeholder">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z"
											fill="#000000"
										/>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									<svg
										width="20"
										height="20"
										viewBox="-5 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>facebook [#176]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-385.000000, -7399.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
														id="facebook-[#176]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									{' '}
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>github [#142]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-140.000000, -7559.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
														id="github-[#142]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>linkedin [#161]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-180.000000, -7479.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
														id="linkedin-[#161]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
						</div>
					</form>
				</div>
				<div className="form-box register">
					<form action="#">
						<h1 className="font-bold">Registration</h1>
						<div className="input-box">
							<input type="text" placeholder="Username" required />
							<span className="icon-placeholder absolute right-4 top-4">
								<svg
									width="20"
									height="20"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
										fill="#000000"
									/>
									<path
										d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
										fill="#000000"
									/>
								</svg>
							</span>
						</div>
						<div className="input-box">
							<input type="email" placeholder="Email" required />
							<span className="icon-placeholder  absolute right-4 top-4">
								<svg
									fill="#000000"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
								</svg>
							</span>
						</div>
						<div className="input-box">
							<input type="password" placeholder="Password" required />
							<span className="icon-placeholder  absolute right-4 top-4">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5.5 10V7C5.5 5.27609 6.18482 3.62279 7.40381 2.40381C8.62279 1.18482 10.2761 0.5 12 0.5C13.7239 0.5 15.3772 1.18482 16.5962 2.40381C17.8152 3.62279 18.5 5.27609 18.5 7V10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13C2 11.3431 3.34315 10 5 10H5.5ZM9.52513 4.52513C10.1815 3.86875 11.0717 3.5 12 3.5C12.9283 3.5 13.8185 3.86875 14.4749 4.52513C15.1313 5.1815 15.5 6.07174 15.5 7V10H8.5V7C8.5 6.07174 8.86875 5.1815 9.52513 4.52513Z"
										fill="#000000"
									/>
								</svg>
							</span>
						</div>
						<button type="submit" className="btn">
							Register
						</button>
						<p>or register with social platforms</p>
						<div className="social-icons">
							<a href="#">
								<span className="icon-placeholder">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M19.76 10.77L19.67 10.42H12.23V13.58H16.68C16.4317 14.5443 15.8672 15.3974 15.0767 16.0029C14.2863 16.6084 13.3156 16.9313 12.32 16.92C11.0208 16.9093 9.77254 16.4135 8.81999 15.53C8.35174 15.0685 7.97912 14.5191 7.72344 13.9134C7.46777 13.3077 7.33407 12.6575 7.33 12C7.34511 10.6795 7.86792 9.41544 8.79 8.47002C9.7291 7.58038 10.9764 7.08932 12.27 7.10002C13.3779 7.10855 14.4446 7.52101 15.27 8.26002L17.47 6.00002C16.02 4.70638 14.1432 3.9941 12.2 4.00002C11.131 3.99367 10.0713 4.19793 9.08127 4.60115C8.09125 5.00436 7.19034 5.59863 6.43 6.35002C4.98369 7.8523 4.16827 9.85182 4.15152 11.9371C4.13478 14.0224 4.918 16.0347 6.34 17.56C7.12784 18.3449 8.06422 18.965 9.09441 19.3839C10.1246 19.8029 11.2279 20.0123 12.34 20C13.3484 20.0075 14.3479 19.8102 15.2779 19.42C16.2078 19.0298 17.0488 18.4549 17.75 17.73C19.1259 16.2171 19.8702 14.2347 19.83 12.19C19.8408 11.7156 19.8174 11.2411 19.76 10.77Z"
											fill="#000000"
										/>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									{' '}
									<svg
										width="20"
										height="20"
										viewBox="-5 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>facebook [#176]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-385.000000, -7399.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
														id="facebook-[#176]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>github [#142]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-140.000000, -7559.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
														id="github-[#142]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
							<a href="#">
								<span className="icon-placeholder">
									{' '}
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<title>linkedin [#161]</title>
										<desc>Created with Sketch.</desc>
										<defs></defs>
										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g
												id="Dribbble-Light-Preview"
												transform="translate(-180.000000, -7479.000000)"
												fill="#000000"
											>
												<g id="icons" transform="translate(56.000000, 160.000000)">
													<path
														d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
														id="linkedin-[#161]"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</span>
							</a>
						</div>
					</form>
				</div>
				<div className="toggle-box">
					<div className="toggle-panel toggle-left">
						<h1 className="font-bold">Hello, Welcome!</h1>
						<p>Don't have an account?</p>
						<button className="btn register-btn">Register</button>
					</div>
					<div className="toggle-panel toggle-right">
						<h1 className="font-bold">Welcome Back!</h1>
						<p>Already have an account?</p>
						<button className="btn login-btn">Login</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
