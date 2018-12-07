import React from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import Preview from "../component/accountprevdiv.jsx";

function TradesPrev(props) {
	TradesPrev.propTypes = {
		pagetitle: PropTypes.string,
		pagedescription: PropTypes.string,
		link: PropTypes.string,
		uniqueinfo: PropTypes.number
	};

	return (
		<div
			className="col-xs-12 col-md-9 col-lg-4 mb-xs-3"
			style={{ width: "588px" }}>
			<div className="card">
				<div className="card-header text-left">
					<h5 className="card-title">{props.pagetitle}</h5>
				</div>
				<div className="card-body text-center">
					<p className="card-text" style={{ whiteSpace: "normal" }}>
						{props.pagedescription}
					</p>
					<h5>{props.pagetitle + " preview"} </h5>
					<Context.Consumer>
						{({ store, actions }) => {
							console.log(store.trades);
							return store.trades
								.slice(0, 3)
								.map((item, index) => {
									const book = actions.searchBookByID(
										item.book
									);
									if (typeof book === "undefined") {
										return <h2> No book selected</h2>;
									} else {
										return (
											// <Preview
											// 	key={
											// 		actions.searchBookByID(
											// 			item.book
											// 		).id
											// 	}
											// 	link={actions
											// 		.searchBookByID(item.book)
											// 		.id.toString()}
											// 	picurl={
											// 		actions.searchBookByID(
											// 			item.book
											// 		).image
											// 	}
											// 	title={
											// 		actions.searchBookByID(
											// 			item.book
											// 		).title
											// 	}
											// />
										);
									}
								});
						}}
					</Context.Consumer>
					<h5>View more</h5>
					<Link to={props.link}>
						<button
							type="button"
							className="btn btn-outline-dark btn-lg mb-3 text-right"
							style={{ whiteSpace: "normal" }}>
							<i className="far fa-arrow-alt-circle-right" />
						</button>
					</Link>
				</div>
				<div className="card-footer text-center text-muted">
					{props.uniqueinfo + " pending trades"}
				</div>
			</div>
		</div>
	);
}

export default TradesPrev;