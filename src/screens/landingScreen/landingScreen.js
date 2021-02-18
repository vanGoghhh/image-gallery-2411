import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from "react-router-dom";

import Beaches from "../Beaches";
import Birds from "../Birds";
import Mountains from "../Mountains";
import Food from "../Food";

import "./landingScreen.css";

const LandingScreen = () => {
	return (
		<Router>
			<div className="imagegallery-landingscreen">
				<div className="imagegallery-landingscreen-navbar-container">
					<nav className="imagegallery-landingscreen-navbar">
						<div className="imagegallery-landingscreen-navbar-link-container">
							<NavLink
								className="imagegallery-landingscreen-navbar-link"
								to="/mountains"
							>
								Mountains
							</NavLink>
						</div>
						<div className="imagegallery-landingscreen-navbar-link-container">
							<NavLink
								className="imagegallery-landingscreen-navbar-link"
								to="/birds"
							>
								Birds
							</NavLink>
						</div>
						<div className="imagegallery-landingscreen-navbar-link-container">
							<NavLink
								className="imagegallery-landingscreen-navbar-link"
								to="/beaches"
							>
								Beaches
							</NavLink>
						</div>
						<div className="imagegallery-landingscreen-navbar-link-container">
							<NavLink
								className="imagegallery-landingscreen-navbar-link"
								to="/food"
							>
								Food
							</NavLink>
						</div>
					</nav>
				</div>
				<div className="imagegallery-landingscreen-screens">
					<Switch>
						<Route
							exact path="/"
							render={() => {
								return <Redirect to="/mountains" />;
							}}
						/>

						<Route path="/mountains" component={Mountains} />
						<Route path="/birds" component={Birds} />
						<Route path="/beaches" component={Beaches} />
						<Route path="/food" component={Food} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default LandingScreen;
