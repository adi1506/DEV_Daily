import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
	const [btnLogin, setBtnLogin] = useState("Login");

	return (
		<div className="header">
			<div className="logo-container">
				<img src={LOGO_URL} alt="logo-img" className="logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>Contact</li>
					<li>About Us</li>
					<li>Cart</li>
					<button
						className="btn-login"
						onClick={() => {
							btnLogin === "Login"
								? setBtnLogin("Logout")
								: setBtnLogin("Login");
						}}
					>
						{btnLogin}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
