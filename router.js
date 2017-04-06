import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import list from './app/components/router/index'
class Roots extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
}
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const Routes = (
	<Router history={history}>
		<Route path="/" component={Roots}>
			<IndexRoute component={index} />//首页
			<Route path="market" getComponent={list.market} />
			<Route path="global" getComponent={list.global} />
			<Route path="recharge" getComponent={list.recharge} />
			<Redirect from='*' to='/'  />
		</Route>
	</Router>
);

export default Routes;
