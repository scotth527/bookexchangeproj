import React from "react";
import NewItem from "../component/library/new_item.jsx";
import Item from "../component/library/item.jsx";
import { Context } from "../store/appContext.jsx";
import Usermodal from "../component/usermodal.jsx";
import "../../styles/index.css";
import Trade from "../component/trade.jsx";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export class Library extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showOwnersModal: false,
			bookid: 0,
			key: "wishers",
			showTradeModal: false
		};
	}

	render() {
		return (
			<div
				className="container-fluid wrapper mb-5"
				style={{
					wordWrap: "break-word",
					marginTop: "50px",
					flexGrow: "1",
					position: "relative"
				}}>
				<NewItem className="modal-dialog" />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.library.map((item, index) => {
							return (
								<Item
									id={item.book}
									key={index}
									title={
										actions.searchBookByID(item.book) &&
										actions.searchBookByID(item.book).title
									}
									description={
										actions.searchBookByID(item.book) &&
										actions.searchBookByID(item.book)
											.description
									}
									buttonName="Find users who want this book"
									deleteStuff={() =>
										actions.deleteFromLibrary(item.id)
									}
									userKey={this.state.key}
									addStuff={() =>
										this.setState({
											key: "wishlist",
											bookid: item.book,
											showOwnersModal: true
										})
									}
								/>
							);
						});
					}}
				</Context.Consumer>
				{this.state.showOwnersModal && (
					<Usermodal
						show={this.state.showOwnersModal}
						onClose={() =>
							this.setState({ key: "", showOwnersModal: false })
						}
						userKey={this.state.key}
						id={parseInt(this.state.bookid)}
						divtitle="Users who are interested in the book"
						onConfirm={id =>
							this.setState({
								showOwnersModal: false,
								user: id,
								showTradeModal: true
							})
						}
					/>
				)}
			</div>
		);
	}
}

Library.propTypes = {
	//id: PropTypes.string,
	history: PropTypes.object,
	match: PropTypes.object,
	onDelete: PropTypes.func,
	delete: PropTypes.func
};
export default withRouter(Library);
