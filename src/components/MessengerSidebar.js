import React from "react";
import MessengerSearchBar from "./MessengerSearchBar";
import MessengerContacts from "./MessengerContacts";

function MessengerSidebar() {
	return (
		<div className="messenger__sidebar">
			<MessengerSearchBar />
			<MessengerContacts />
		</div>
	);
}

export default MessengerSidebar;
