import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Userdiv(props) {
	return (
		<div
			className="col-12 mb-3 d-flex border border-dark rounded"
			id={props.index}
			onClick={e => {
				if (e.currentTarget.className.search(" bg-secondary") == -1) {
					e.currentTarget.className += " bg-secondary";
				} else {
					e.currentTarget.className = e.currentTarget.className.replace(
						" bg-secondary",
						""
					);
				}
			}}>
			<img
				src={props.Picurl}
				className="floatLeft mt-2 mb-2 mr-3"
				alt="..."
				style={{ borderRadius: "50%" }}
			/>
			<div className="d-flex flex-column">
				<h1 className="lead">{props.Username}</h1>
				<p> {props.City}</p>
			</div>
			<button type="button" className="btn btn-primary btn-sm">
				Request Book
			</button>
		</div>
	);
}

Userdiv.propTypes = {
	Username: PropTypes.string,
	Picurl: PropTypes.string,
	City: PropTypes.string,
	index: PropTypes.number,
	id: PropTypes.number
};

Userdiv.defaultProps = {
	Username: "Placeholder",
	Picurl: "https://picsum.photos/50/50/?random",
	City: "Placeholder"
};

export default Userdiv;
