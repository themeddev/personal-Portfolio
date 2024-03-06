import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./highschool.jpg"
								alt="High School"
								className="work-image"
							/>
							<div className="work-title">Atlas Alkabir High School Asni</div>
							<div className="work-subtitle">Baccalaureate in Life and Earth Sciences</div>
						</div>

						<div className="work">
							<img
								src="./ofppt-logo.png"
								alt="DTS Degree"
								className="work-image"
							/>
							<div className="work-title">ISTA ASSAKA AGADIR</div>
							<div className="work-subtitle">DTS in Digital Development (Web Development)</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
