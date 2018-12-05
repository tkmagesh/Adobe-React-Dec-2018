import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Spinner extends Component{
	render = () => {
		let { value, up, down } = this.props;
		return (
			<div>
				<input type="button" value="DOWN" onClick={down}/>
				<span> [ { value } ] </span>
				<input type="button" value="UP" onClick={up}/>
			</div>
		);
	}
}

var spinnerActionCreator = {
	down(){
		var action = { type : 'DOWN' };
		return action;
	},
	up(){
		var action = { type : 'UP' };
		return action;
	}
};


function mapStateToSpinnerProps(storeState){
	var spinnerValue = storeState.spinnerData;
	return { value : spinnerValue };
}

function mapDispatchToSpinnerProps(dispatch){
	var spinnerActions = bindActionCreators(spinnerActionCreator, dispatch);	
	return spinnerActions;
}

export default connect(
	mapStateToSpinnerProps,
	mapDispatchToSpinnerProps
)(Spinner);
