import './header.css';
import '../../lib/swiper.min.css';
import React from 'react';
import Swiper from '../../lib/swiper.min.js'
import fetchJsonp from 'fetch-jsonp';

let Header = React.createClass({
	getInitialState: function() {
        return {
        	imgUrls: [],
        };
 	},
	componentDidMount: function() {
		fetchJsonp(this.props.source).then((response) => {
			return response.json();
		}).then((data) => {

			if(data.status) {
				//如果组件渲染到了 DOM 中，isMounted() 返回 true。
				//可以使用该方法保证 setState() 和 forceUpdate()
				//在异步场景下的调用不会出错。
				if(this.isMounted()) {
					this.setState({
						imgUrls: data.data,
					})
				    new Swiper ('#header .swiper-container', {
					    loop: true,
					    pagination: '.swiper-pagination',
					    paginationClickable: true,
					    autoplay : 3000,
						autoplayDisableOnInteraction : false,
					})
				}
			}else {
				alert(data.msg);
			}
		})
	},

	render: function () {
		let countId = 0;
	    return (
	      <div id="header">
    		<div className="swiper-container">
			    <div className="swiper-wrapper">
			    	{
			    		this.state.imgUrls.map((url) => {
			    			return <div className="swiper-slide" key={"header" + countId++} >
			    						<img className="img" src={url} />
			    				   </div>
			    		})
			    	}
			    </div>
				<div className="swiper-pagination"></div>
			</div>
	      </div>
	    );
	  }
})

Header.propTypes = {
    source: React.PropTypes.string.isRequired,
}
module.exports = Header;

