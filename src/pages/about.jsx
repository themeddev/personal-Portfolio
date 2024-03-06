import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import { motion } from "framer-motion";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<motion.div 
									className="title about-title"
									initial= {{ opacity: 0, y: 10 }}
									animate={{ opacity: 1 , y: 0}}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									{INFO.about.title}
								</motion.div>

								<motion.div 
									className="subtitle about-subtitle"
									initial= {{ opacity: 0, y: 10 }}
									animate={{ opacity: 1 , y: 0}}
									transition={{ duration: 0.3, delay: 0.2 }}
								>
									{INFO.about.description}
								</motion.div>
							</div>

							<div className="about-left-side">
								<motion.div 
									className="about-image-container"
									initial= {{ opacity: 0, y: -10, rotate: 2 }}
									animate={{ opacity: 1 , y: 0, rotate: 0}}
									transition={{ duration: 0.3, delay: 0.3 }}
								>
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</motion.div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
