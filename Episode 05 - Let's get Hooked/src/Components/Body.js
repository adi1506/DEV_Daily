import ResCard from "./ResCard";
import { resList } from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
	const [listOfResState, setListOfResState] = useState(resList);

	return (
		<div className="body">
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfResState.filter(
							(res) => res.info.avgRating > 4
							
						);
						setListOfResState(filteredList);
						console.log(listOfResState);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{listOfResState.map((restaurant) => (
					<ResCard
						resData={restaurant}
						key={restaurant.info.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
