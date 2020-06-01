import React from "react";
import avatar from "../assets/contact_profile_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function MessengerContent() {
	return (
		<div className="messenger__content">
			<div className="messenger__header">
				<div className="messenger__header_left">
					<img src={avatar} alt="" className="contact__img" />
					<div className="contact__info">
						<strong className="contact__name">Contact name</strong>
						<p className="contact__time">last seen 10:53</p>
					</div>
				</div>
				<div className="messenger__header_right">
					<span>
						<FontAwesomeIcon icon={faInfoCircle} className="info" />
					</span>
					<span>
						<FontAwesomeIcon icon={faEllipsisV} className="menu" />
					</span>
				</div>
			</div>
			<ul className="messenger__messages">
				<li className="messenger__message me">
					<p className="message__content">Salam Ferid</p>
					<span className="message__time">10:23</span>
				</li>
				<li className="messenger__message">
					<p className="message__content">Salam Emil</p>
					<span className="message__time">10:24</span>
				</li>
				<li className="messenger__message me">
					<p className="message__content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
						temporibus laboriosam, facilis explicabo dicta quae distinctio
						consectetur rem voluptas ab. Natus corporis ratione deleniti
						modi quaerat. Amet ratione asperiores voluptate?
					</p>
					<span className="message__time">10:23</span>
				</li>

				<li className="messenger__message">
					<p className="message__content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis excepturi aliquid cupiditate, suscipit blanditiis,
						nobis aspernatur, repellendus quisquam ab velit mollitia
						impedit. Voluptate voluptatem atque quasi explicabo modi
						voluptatibus nobis!
					</p>
					<span className="message__time">10:24</span>
				</li>
				<li className="messenger__message">
					<p className="message__content">Salam Emil</p>
					<span className="message__time">10:24</span>
				</li>
			</ul>
			<div className="messenger__message__form">
				<ul>
					<li>
						<span></span>
					</li>
					<li>
						<input type="text" />
					</li>
					<li>
						<span></span>
					</li>
					<li>
						<span></span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default MessengerContent;
