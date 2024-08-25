import ResCard from "./ResCard";
// import { resList } from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	const [listOfResState, setListOfResState] = useState([]);
	const [filteredRes, setFilteredRes] = useState([]);
	const [searchText, setSearchText] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		console.log(json);
		setListOfResState(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRes(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	return listOfResState.length == 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-bar"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
							console.log(e);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							const filteredSearchList =
								listOfResState.filter((res) =>
									res.info.name
										.toLowerCase()
										.includes(searchText)
								);

							setFilteredRes(filteredSearchList);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfResState.filter(
							(res) => res.info.avgRating > 4.2
						);
						setFilteredRes(filteredList);
						console.log(listOfResState);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{filteredRes.map((restaurant) => (
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
