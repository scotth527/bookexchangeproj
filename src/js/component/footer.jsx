import React, { Component } from "react";

import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer
				style={{
					position: "relative",
					bottom: "0"
				}}
				className="container-fluid mt-2 text-center border-top border-dark">
				<h2 className="col-12">Footer</h2>
			</footer>
		);
	}
}
