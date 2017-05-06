import './otherapp.css';
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class Otherapp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apps: []
		}
	}

	componentDidMount() {
		fetchJsonp(this.props.source).then((response)=> {
			return response.json()
		}).then((data)=> {
			if (data.status) {
				this.setState({
					apps: data.data
				})
			} else {
				alter(data.msg)
			}
		})
	}

	render() {
		return (
			<div className="oapp">
				<ul>
					{
						this.state.apps.map((app, index)=> {
							return <li key={index}>
								<a href={app.url}>
									<div className="app_icon">
										<img src={app.icon}/>
									</div>
									<span> {app.title}</span>
								</a>
							</li>
						})
					}
				</ul>
			</div>
		)
	}
}

Otherapp.propTypes = {
	source: React.PropTypes.string.isRequired
};
