import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import { motion } from "framer-motion";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<motion.div 
							className="title contact-title"
							initial= {{ opacity: 0, y: 10, scale : 0.99 }}
							animate={{ opacity: 1 , y: 0, scale : 1}}
							transition={{ duration: 0.3, delay: 0.1 }}	
							>
							Let's Connect: Reach Out to Me
						</motion.div>

						<motion.div 
							className="subtitle contact-subtitle"
							initial= {{ opacity: 0, y: 10 , scale : 0.99}}
							animate={{ opacity: 1 , y: 0, scale : 1}}
							transition={{ duration: 0.3, delay: 0.2 }}	
							>
							Thank you for your interest in reaching out. I
							value your feedback, queries, and ideas. For specific
							inquiries or comments, please email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I strive to respond to all messages within 24
							hours, allowing for potential delays during busy
							periods. Alternatively, you can use the contact form
							on my website to connect. Just fill in the necessary
							fields, and I'll get back to you promptly. If you
							prefer connecting on social media, find me on{" "}
							<a
								href={INFO.socials.github} // Replace with your GitHub link
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							. I share projects and engage with the community
							there, so feel free to reach out. Thanks again for
							your interest, and I'm eager to hear from you!
						</motion.div>
					</div>

					<div className="socials-container">
						<motion.div 
							className="contact-socials"
							initial= {{ opacity: 0, y: 10 , scale : 0.99}}
							animate={{ opacity: 1 , y: 0, scale : 1}}
							transition={{ duration: 0.3, delay: 0.3 }}	
						>
							<Socials />
						</motion.div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
