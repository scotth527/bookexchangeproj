import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			this.state.actions.fetchData();
			this.state.actions.getLibrary(this.state.store.sessions.profile);
			this.state.actions.getWishlist(this.state.store.sessions.profile);
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
