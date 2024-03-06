import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import { motion } from "framer-motion";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`My Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<motion.div 
							className="title projects-title"
							initial= {{ opacity: 0, x: -10 }}
							animate={{ opacity: 1 , x: 0}}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							Exploring React, Laravel, and TailwindCSS: My Coding Journey
						</motion.div>

						<motion.div 
							className="subtitle projects-subtitle"
							initial= {{ opacity: 0, x: -10 }}
							animate={{ opacity: 1 , x: 0}}
							transition={{ duration: 0.3, delay: 0.2 }}
						>
							Embark on a journey through my coding projects where
							I utilize React, Laravel, and TailwindCSS. These
							projects showcase my dedication to learning and
							improving my skills in web development. Many of them
							are open-source, inviting you to explore the code,
							propose enhancements, and collaborate. Your
							suggestions are invaluable as I continue to evolve
							and contribute to the coding community.
						</motion.div>

						<motion.div 
							className="projects-list"
							initial= {{ opacity: 0, y: 10 }}
							animate={{ opacity: 1 , y: 0}}
							transition={{ duration: 0.3, delay: 0.3 }}	
						>
							<AllProjects />
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

export default Projects;