import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
	const [btnLogin, setBtnLogin] = useState("Login");
	// console.log("Header Rendered");
	// useEffect(() => {
	// 	console.log("useEffect called");
	// },[btnLogin]);

	return (
		<div className="header">
			<div className="logo-container">
				<img src={LOGO_URL} alt="logo-img" className="logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li><Link to={"/contact"}>Contact</Link></li>
					<li><Link to={"/about"}>About us</Link></li>
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
