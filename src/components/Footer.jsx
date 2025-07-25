import React from 'react';
import '../styles/footer.css';

const Footer = () => {
	return (
		<>
			<footer className="new_footer_area bg_color">
				<div className="new_footer_top">
					<div className="container">
						<div className="row">
							{/* First Column: Get in Touch */}
							<div className="col-lg-3 col-md-6">
								<div
									className="f_widget company_widget wow fadeInLeft"
									data-wow-delay="0.2s"
									style={{
										visibility: 'visible',
										animationDelay: '0.2s',
										animationName: 'fadeInLeft',
									}}
								>
									<h3 className="f-title f_600 t_color f_size_18">Masoom Minawala</h3>
									<p>Don't miss any updates of our new Fashion Dress & Shoes!</p>
									<input
										type="text"
										name="EMAIL"
										className="form-control memail"
										placeholder="Email"
									/>
									<button className="btn btn_get btn_get_two">Subscribe</button>
									<p className="mchimp-errmessage" style={{ display: 'none' }}></p>
									<p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
								</div>
							</div>

							{/* Second Column: Download */}
							<div className="col-lg-3 col-md-6">
								<div
									className="f_widget about-widget pl_70 wow fadeInLeft"
									data-wow-delay="0.4s"
									style={{
										visibility: 'visible',
										animationDelay: '0.4s',
										animationName: 'fadeInLeft',
									}}
								>
									<h3 className="f-title f_600 t_color f_size_18">Pages</h3>
									<ul className="list-unstyled f_list">
										<li>
											<a href="#">Home</a>
										</li>
										<li>
											<a href="#">Products</a>
										</li>
										<li>
											<a href="#">Meet Masoom</a>
										</li>
										<li>
											<a href="#">Masooms Success</a>
										</li>
										<li>
											<a href="#">About</a>
										</li>
										{/* <li>
											<a href="#">Login</a>
										</li> */}
									</ul>
								</div>
							</div>

							{/* Third Column: Help */}
							<div className="col-lg-3 col-md-6">
								<div
									className="f_widget about-widget pl_70 wow fadeInLeft"
									data-wow-delay="0.6s"
									style={{
										visibility: 'visible',
										animationDelay: '0.6s',
										animationName: 'fadeInLeft',
									}}
								>
									<h3 className="f-title f_600 t_color f_size_18">Categories</h3>
									<ul className="list-unstyled f_list">
										<li>
											<a href="#">Shirts</a>
										</li>
										<li>
											<a href="#">Jeans</a>
										</li>
										<li>
											<a href="#">Jackets</a>
										</li>
										<li>
											<a href="#">Skirits</a>
										</li>
										<li>
											<a href="#">Brides</a>
										</li>
										<li>
											<a href="#">Sheos</a>
										</li>
									</ul>
								</div>
							</div>

							{/* Fourth Column: Team Solutions */}
							<div className="col-lg-3 col-md-6">
								<div
									className="f_widget social-widget pl_70 wow fadeInLeft"
									data-wow-delay="0.8s"
									style={{
										visibility: 'visible',
										animationDelay: '0.8s',
										animationName: 'fadeInLeft',
									}}
								>
									<h3 className="f-title f_600 t_color f_size_18">Social Media</h3>
									{/* <div className="f_social_icon">
										<a href="#" className="fab fa-facebook">
											<svg
												fill="currentColor"
												height="1.5em"
												viewBox="0 0 32 32"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
											</svg>
										</a>
										<a href="#" className="fab fa-twitter">
											t
										</a>
										<a href="#" className="fab fa-linkedin">
											in
										</a>
										<a href="#" className="fab fa-pinterest">
											p
										</a>
									</div> */}
									<ul className="footerSMWrapper">
										<li className="icon youtube">
											{/* <span className="tooltip">YouTube</span> */}
											<svg
												fill="currentColor"
												height="1.5em"
												viewBox="0 0 32 32"
												version="1.1"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>
											</svg>
										</li>
										<li className="icon facebook">
											{/* <span className="tooltip">Facebook</span> */}
											<svg
												viewBox="0 0 320 512"
												height="1.2em"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
											</svg>
										</li>
										<li className="icon x">
											{/* <span className="tooltip">X.com</span> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="1.5em"
												fill="currentColor"
												viewBox="0 0 50 50"
											>
												<path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
											</svg>
										</li>
										<li className="icon instagram">
											{/* <span className="tooltip">Instagram</span> */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="1.2em"
												fill="currentColor"
												className="bi bi-instagram"
												viewBox="0 0 16 16"
											>
												<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
											</svg>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="footer_bg">
						<div className="footer_bg_one"></div>
						<div className="footer_bg_two"></div>
					</div>
				</div>
				<div className="footer_bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-sm-7">
								<p className="mb-0 f_400">All Rights Reserved | &copy; Copyright 2025</p>
							</div>
							<div className="col-lg-6 col-sm-5 text-right">
								<p className="f_400">
									Designed & Developed by{' '}
									<span className="font-bold">ASAD ALI s/o Khadim Hussain</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
