import React from "react";
import "./messenger.css";
import MessengerSidebar from "./MessengerSidebar";
import MessengerContent from "./MessengerContent";

function Messenger() {
	return (
		<div className="messenger">
			<MessengerSidebar />
			<MessengerContent />
		</div>
	);
}

export default Messenger;
