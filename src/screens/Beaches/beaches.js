import React from "react";

import "./beaches.css";

import Beach1 from "./assets/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg";
import Beach2 from "./assets/photo-1473116763249-2faaef81ccda.jpg";
import Beach3 from "./assets/photo-1474533883693-59a44dbb964e.jpg";
import Beach4 from "./assets/photo-1500304624028-5b2641868ade.jpg";
import Beach5 from "./assets/photo-1505228395891-9a51e7e86bf6.jpg";
import Beach6 from "./assets/photo-1508313157893-34fe6176c189.jpg";
import Beach7 from "./assets/photo-1521170813716-0b3f42fcfb65.jpg";
import Beach8 from "./assets/photo-1538964173425-93884d739596.jpg";

const beachImages = [
	Beach1,
	Beach2,
	Beach3,
	Beach4,
	Beach5,
	Beach6,
	Beach7,
	Beach8,
];
const Beaches = () => {
	return (
		<div className="imagegallery-beaches">
			<h2 className="imagegallery-beaches-header">Beaches</h2>
			<div className="imagegallery-beaches-images">
				{beachImages.map((img) => (
					<img src={img} className="imagegallery-beaches-image" />
				))}
			</div>
		</div>
	);
};

export default Beaches;
