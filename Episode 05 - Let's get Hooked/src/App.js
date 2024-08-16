import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


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
