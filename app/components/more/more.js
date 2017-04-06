import './more.css';
import '../../lib/swiper.min.css';
import Swiper from '../../lib/swiper.min.js';
import fetchJsonp from 'fetch-jsonp';
import React, { Component } from 'react'

class More extends Component {
	constructor(props) {
		super(props);
		this.state = {
			more1: [],
			more2: [],
			more3: []
		}
	}

	componentDidMount() {
		fetchJsonp(this.props.source).then((response) => {
			return response.json();
		}).then((data) => {
			if(data.status) {
				this.setState({
					more1: data.data.slice(0,3),
					more2: data.data.slice(3,5),
					more3: data.data.slice(5,7),
				})
			    new Swiper ('.more_bottom .swiper-container', {
				    loop: true,
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    autoplay : 2000,
					autoplayDisableOnInteraction : false,
				})
			}else {
				alert(data.msg);
			}
		})
	}

	render() {

		let countId = 0;
		return (
			<div id="more">
				<div className="more_top">
					{
						this.state.more1.map((item) => {
							return <div className="more_link" key={"more" + countId++}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
						})
					}
				</div>
				<div className="more_middle">
					{
						this.state.more2.map((item) => {
							return <div className="more_style" key={"more" + countId++}>
										<a href={item.url}>
											<img src={item.icon} alt=""/>
										</a>
									</div>
						})
					}
				</div>
				<div className="more_bottom">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{
								this.state.more3.map((item) => {
									return  <div className="swiper-slide" key={"more" + countId++}>
												<a href={item.url}>
													<img src={item.icon} alt=""/>
												</a>
											</div>
								})
							}
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		);
	}
}

More.propTypes = {
    source: React.PropTypes.string.isRequired,
}
module.exports = More;
