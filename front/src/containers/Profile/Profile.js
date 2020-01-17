import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Avatar from './mystery-avatar.jpg'

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		profile:{
			email: "homer.simpson@wildcodeschool.fr",
			name: "Homer",
			lastname: "Simpson"
		}
	}
}

	componentDidMount() {
		if (this.props.token){
		fetch('/profile',
			{
				headers: {
					'Authorization': 'Bearer ' + this.props.token,
				}
			})
			.then(res => {
				if (res.ok)
					return res.json()
				else
					throw new Error(res.statusText)
			})
			.then(res => { this.setState({ profile: res }) })
			.catch()
	}	
}
	

	render() {
		return (
			<div>
				<div class="image-crop">
					<img id="avatar" alt='avatar' src={Avatar}></img>
				</div>

				<div id="bio">
					<h2>{this.state.profile.name + ' ' + this.state.profile.lastname}</h2>
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