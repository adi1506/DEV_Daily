import React from "react";
import ReactDOM from "react-dom/client";

// => Header
// 	->Logo
// 	->Nav Items
// => Body
// 	->Search
// 	->Restaurant Container
// 		->Restaurant Cards
// => Footer
// 	->Copyright
// 	->Links
// 	->Address
// 	->Contacts

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
					alt=""
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const ResCard = (props) => {
	const { resData } = props;
	const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, sla } = resData?.info;

	return (
		<div className="res-card">
			<img
				className="res-logo"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
				alt="food-image"
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRatingString} stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla.slaString}</h4>
		</div>
	);
};

const resList = [
	{
		info: {
			id: "630193",
			name: "Champaran  Handi Restaurant",
			cloudinaryImageId: "xph0vf5pvbxjf8xchwjk",
			locality: "Sinchai Colony",
			areaName: "Nagpur road",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian"],
			avgRating: 4.2,
			parentId: "376324",
			avgRatingString: "4.2",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 50,
				lastMileTravel: 11.9,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "11.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "40% OFF",
				subHeader: "UPTO ₹80",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/champaran-handi-restaurant-sinchai-colony-nagpur-road-chhindwara-630193",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "195429",
			name: "Sanju Ka Dhaba",
			cloudinaryImageId: "hjao7sorzggaeqito6au",
			locality: "Vishnu Nagar",
			areaName: "Prasia Road",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "South Indian", "Chinese"],
			avgRating: 4.4,
			veg: true,
			parentId: "177443",
			avgRatingString: "4.4",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 51,
				lastMileTravel: 14,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "14.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 22:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/sanju-ka-dhaba-vishnu-nagar-prasia-road-chhindwara-195429",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "234875",
			name: "Adil Hotel",
			cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
			locality: "Rautha Wada",
			areaName: "Chhindwara Locality",
			costForTwo: "₹150 for two",
			cuisines: ["North Indian", "Biryani", "Tandoor"],
			avgRating: 4.4,
			parentId: "27123",
			avgRatingString: "4.4",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 50,
				lastMileTravel: 12.6,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "12.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹349",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "774546",
			name: "Shree Naivedyam",
			cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
			locality: "Khajri Road",
			areaName: "Chhindwara City",
			costForTwo: "₹300 for two",
			cuisines: [
				"North Indian",
				"Chinese",
				"South Indian",
				"Pizzas",
				"Beverages",
			],
			avgRating: 4.3,
			veg: true,
			parentId: "428968",
			avgRatingString: "4.3",
			totalRatingsString: "20+",
			sla: {
				deliveryTime: 52,
				lastMileTravel: 11.7,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "11.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "10% OFF",
				subHeader: "UPTO ₹40",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/shree-naivedyam-khajri-road-chhindwara-city-chhindwara-774546",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "213358",
			name: "Apni Rasoi Family Dhaba",
			cloudinaryImageId: "sidigb8zqjfrfpkrtqgl",
			locality: "Vishnu Nagar",
			areaName: "Parasia Road",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Indian", "South Indian", "Chinese"],
			avgRating: 4,
			veg: true,
			parentId: "35024",
			avgRatingString: "4.0",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 51,
				lastMileTravel: 13.9,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "13.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 22:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-chhindwara-213358",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "618037",
			name: "Jai Ganesh Bhojnalaya",
			cloudinaryImageId: "yzgqriufpzmloogcn2vl",
			locality: "Railway Colony",
			areaName: "Bus stand",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
			avgRating: 3.8,
			veg: true,
			parentId: "368432",
			avgRatingString: "3.8",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 42,
				lastMileTravel: 11,
				serviceability: "SERVICEABLE",
				slaString: "40-45 mins",
				lastMileTravelString: "11.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹150 OFF",
				subHeader: "ABOVE ₹299",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/jai-ganesh-bhojnalaya-railway-colony-bus-stand-chhindwara-618037",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "257428",
			name: "Raajbagh Restaurant ",
			cloudinaryImageId: "xvyrclhxftulsglktaek",
			locality: "Seoni Road",
			areaName: "Chhindwara Locality",
			costForTwo: "₹150 for two",
			cuisines: [
				"North Indian",
				"South Indian",
				"Indian",
				"Chinese",
				"Fast Food",
				"Beverages",
			],
			avgRating: 3.7,
			veg: true,
			parentId: "164019",
			avgRatingString: "3.7",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 62,
				lastMileTravel: 10.8,
				serviceability: "SERVICEABLE",
				slaString: "60-65 mins",
				lastMileTravelString: "10.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 22:30:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "v1695133679/badges/Pure_Veg111.png",
						description: "pureveg",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "pureveg",
									imageId: "v1695133679/badges/Pure_Veg111.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹110",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "150586",
			name: "Accord International",
			cloudinaryImageId: "ntcsuou2650qimnkrc3m",
			locality: "Parasia Road",
			areaName: "Vishnu Nagar",
			costForTwo: "₹400 for two",
			cuisines: [
				"North Indian",
				"South Indian",
				"Continental",
				"Beverages",
			],
			avgRating: 4.3,
			parentId: "26828",
			avgRatingString: "4.3",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 68,
				lastMileTravel: 14.3,
				serviceability: "SERVICEABLE",
				slaString: "65-70 mins",
				lastMileTravelString: "14.3 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-08-07 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "15% OFF",
				subHeader: "UPTO ₹45",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference:
				"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-9a4fb944-fbcd-4cb7-934a-a6fcae2858a1",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/accord-international-parasia-road-vishnu-nagar-chhindwara-150586",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId:
			"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

const ResContainer = () => {
	return (
		<div className="res-container">
			{/* <ResCard
				name="Nazeer"
				cuisine="North Indian, Biriyani, Mughlai"
				rating="4.4"
				time="38"
			/>
			<ResCard
				name="KFC"
				cuisine="Fast Food, American"
				rating="4.1"
				time="20"
			/> */}
			{/* <ResCard resData={resList[0]} />
			<ResCard resData={resList[1]} />
			<ResCard resData={resList[2]} />
			<ResCard resData={resList[3]} />
			<ResCard resData={resList[4]} />
			<ResCard resData={resList[5]} />
			<ResCard resData={resList[6]} />
			<ResCard resData={resList[7]} /> */}
			{
				resList.map((restaurant) => (
					<ResCard key={restaurant.info.id} resData = {restaurant}/>
				))
			}
		</div>
	);
};

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				<ResContainer />
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
