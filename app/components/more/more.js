import './more.css';
import React from 'react';
import '../../lib/swiper.min.css';
import Swiper from '../../lib/swiper.min';
import fetchJsonp from 'fetch-jsonp';

export default class More extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			more1: [],
			more2: [],
			more3: []
		}
	}

	componentDidMount() {
		fetchJsonp(this.props.source).then((response)=> {
			return response.json()
		}).then((data)=> {
			if (data.status) {
				this.setState({
					more1: data.data.slice(0, 3),
					more2: data.data.slice(3, 5),
					more3: data.data.slice(5, 7),
				});

				new Swiper('.more_bottom .swiper-container', {
					loop: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay: 2000,
					autoplayDisableOnInteraction: false,
				})
			} else {
				alter(data.msg)
			}

		})
	}

	render() {
		return (
			<div id="more">
				<div className="more_top">
					{
						this.state.more1.map((item,index)=>{
							return <div className="more_link" key={index}>
								<a href={item.url}>
									<img src={item.icon} alt=""/>
								</a>
							</div>
						})
					}
				</div>
				<div className="more_middle">
					{
						this.state.more2.map((item,index)=>{
							return <div className="more_style" key={index}>
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
								this.state.more3.map((item,index)=>{
									return <div className="swiper-slide" key={index}>
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
		)
	}
}
