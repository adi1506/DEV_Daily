import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Aditya Chatterjee"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1 id="heading">Namaste using JSX</h1>;

const Title = () => {
	return <h2 className="title">This is the Title Component</h2>;
    // return jsxHeading;
};

const HeadingComponent = () => (
	<div id="heading">
        <Title/>
        {jsxHeading}
		<h1>This is Heading Component!</h1>
	</div>
);

root.render(<HeadingComponent />);
