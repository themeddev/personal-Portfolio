import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";
import { motion } from "framer-motion";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<motion.div 
							className="title articles-title"
							initial= {{ opacity: 0, x: 10 }}
							animate={{ opacity: 1 , x: 0}}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							{INFO.articles.title}
						</motion.div>

						<motion.div 
							className="subtitle articles-subtitle"
							initial= {{ opacity: 0, x: 10 }}
							animate={{ opacity: 1 , x: 0}}
							transition={{ duration: 0.3, delay: 0.2 }}
						>
							{INFO.articles.description}
						</motion.div>

						<div className="articles-container">
							<motion.div 
								className="articles-wrapper"
								initial= {{ opacity: 0, x: 10 }}
								animate={{ opacity: 1 , x: 0}}
								transition={{ duration: 0.3, delay: 0.3 }}
							>
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</motion.div>
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

export default Articles;
