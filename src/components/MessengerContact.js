import React from "react";
import avatar from "../assets/contact_profile_img.png";

function MessengerContact() {
	return (
		<li className="messenger__contact">
			<img src={avatar} alt="" className="contact__img" />
			<div className="contact__info">
				<strong className="contact__name">
					Contact name dkfnsdkjfnskdjnfsjdnf
				</strong>
				<p className="contact__last__message">
					contact last message here hfbhdbfshdbfjshdbfjhsd
				</p>
			</div>
			<span className="message__circle">99+</span>
		</li>
	);
}

export default MessengerContact;
