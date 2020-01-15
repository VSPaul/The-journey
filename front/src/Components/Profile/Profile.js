import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Avatar from './mystery-avatar.jpg'

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: "homer.simpson@wildcodeschool.fr",
			name: "Homer",
			lastname: "Simpson"
		}
	}

	render() {
		return (
			<div>
				<div class="image-crop">
					<img id="avatar" src={Avatar}></img>
				</div>

				<div id="bio">
					<h2>{this.state.name + ' ' + this.state.lastname}</h2>
				</div>

				<div id="bio">
					<h4>{this.state.email}</h4>
				</div>

				<div id="buttons">
					<Link className='link' to="/SignIn"><button>Sign out</button></Link>
				</div>
			</div>
		)
	}
}

export default Profile;