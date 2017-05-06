import './like.css';
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class Like extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stores: []
		}
	}

	componentDidMount() {
		fetchJsonp(this.props.source).then((response)=> {
			return response.json()
		}).then((data)=> {
			if (data.status) {
				this.setState({
					stores: data.data
				})
			} else {
				alter(data.msg)
			}
		})

	}

	render() {
		return (
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.stores.map((item, index)=> {
						return <div className="like_content" key={index}>
							<div className="like_link">
								<a href={item.url}>
									<img src={item.icon} alt=""/>
								</a>
							</div>
							<div className="like_desc">
								<span>
									{item.desc}
								</span>
							</div>
							<div className="like_price">
								<spam>¥{item.price}</spam>
								<div>
									<a href={item.more}>看相似 </a>
								</div>
							</div>
						</div>
					})
				}
			</div>
		)
	}
}
