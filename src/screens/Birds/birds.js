import React from "react";

import "./birds.css";
import Bird1 from "./assets/ara-3601194__340.webp";
import Bird2 from "./assets/bird-1045954__340.webp";
import Bird3 from "./assets/hummingbird-2139279__340.webp";
import Bird4 from "./assets/kingfisher-2046453__340.webp";
import Bird5 from "./assets/owl-50267__340.webp";
import Bird6 from "./assets/spring-bird-2295431__340.webp";
import Bird7 from "./assets/spring-bird-2295434__340.webp";
import Bird8 from "./assets/spring-bird-2295436__340.webp";

const birdImages = [Bird1, Bird2, Bird3, Bird4, Bird5, Bird6, Bird7, Bird8];

const Birds = () => {
	return (
		<div className="imagegallery-birds">
			<h2 className="imagegallery-birds-header">Birds</h2>
			<div className="imagegallery-birds-images">
				{birdImages.map((img) => (
					<img src={img} className="imagegallery-birds-image" />
				))}
			</div>
		</div>
	);
};

export default Birds;
