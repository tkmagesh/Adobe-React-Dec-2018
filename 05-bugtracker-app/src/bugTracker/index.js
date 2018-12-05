import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugSort from './views/bugSort';
import BugStats from './views/bugStats';
import BugList from './views/bugList';
import BugEdit from './views/bugEdit';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { model : bugs, addNew, toggle, removeClosed, toggleFilter, filtered } = this.props;
		return(
			<React.Fragment>
				<label> Apply Filter : </label>
				<input type="checkbox" onChange= { () => toggleFilter() } checked={filtered}/>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</React.Fragment>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	let { bugsData, spinnerData } = storeState;
	let bugsModel = bugsData.filtered ? bugsData.list.filter((bug, index) => index % 2 === spinnerData % 2) : bugsData.list;
	return { model : bugsModel, filtered : bugsData.filtered };
}

function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);	
	return bugActions;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);