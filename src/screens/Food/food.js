import React from "react";

import "./food.css";

import Food1 from "./assets/photo-1467003909585-2f8a72700288.jpg";
import Food2 from "./assets/photo-1476718406336-bb5a9690ee2a.jpg";
import Food3 from "./assets/photo-1482049016688-2d3e1b311543.jpg";
import Food4 from "./assets/photo-1493770348161-369560ae357d.jpg";
import Food5 from "./assets/photo-1498837167922-ddd27525d352.jpg";
import Food6 from "./assets/photo-1504674900247-0877df9cc836.jpg";
import Food7 from "./assets/photo-1504754524776-8f4f37790ca0.jpg";
import Food8 from "./assets/photo-1512621776951-a57141f2eefd.jpg";

const foodImages = [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8];

const Food = () => {
	return (
		<div className="imagegallery-food">
			<h2 className="imagegallery-food-header">Food</h2>
			<div className="imagegallery-food-images">
				{foodImages.map((img) => (
					<img src={img} className="imagegallery-food-image" />
				))}
			</div>
		</div>
	);
};

export default Food;
