import './like.css';
import React from 'react'; 
import fetchJsonp from 'fetch-jsonp';

let Like = React.createClass({
	getInitialState: function() {
		return {
			stores: [],
		}
	},

	componentDidMount: function() {
		fetchJsonp(this.props.source).then((response) => {
			return response.json();
		}).then((data) => {
			if(data.status) {
				if(this.isMounted()) {
					this.setState({
						stores: data.data,
					});
				}
			}else {
				alert(data.msg);
				reject("get data error!")
			}
		})
	},

	render: function() {
		let countId = 0;
		return (
			<div id="like">
				<p>猜你喜欢</p>
				{
					this.state.stores.map((item) => {
						return <div className="like_content" key={"like" + countId++}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item.icon } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }		
										</span>
									</div>
									<div className="like_price">
										<span>¥{ item.price }</span>
										<div><a href={ item.more }>看相似</a></div>
									</div>
								</div>
					})
				}
			</div>
		);
	}
})

Like.propTypes = {
    source: React.PropTypes.string.isRequired,
}
module.exports = Like;
