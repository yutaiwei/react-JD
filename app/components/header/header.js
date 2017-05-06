import './header.css';
import React from 'react';
import '../../lib/swiper.min.css';
import Swiper from '../../lib/swiper.min';
import fetchJsonp from 'fetch-jsonp';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrls: []
		}
	}

	componentDidMount() {
		fetchJsonp(this.props.source).then((response)=> {
			return response.json()
		}).then((data)=> {
			if (data.status) {

					this.setState({
						imgUrls: data.data,
					})
					new Swiper('#header .swiper-container',{
						loop:true,
						pagination:'.swiper-pagination',
						paginationClickable:true,
						autoplay:2000,
						autoplayDisableOnInteraction:false
					})

			} else {
				alter(data.msg)
			}
		})
	}

	render() {
		let countId = 0;
		return (
			<div id="header">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{
							this.state.imgUrls.map((url, index)=> {
								return <div className="swiper-slide" key={index}>
									<img className="img" src={url}/>
								</div>
							})
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}
Header.propTypes = {
	source: React.PropTypes.string.isRequired,
}
