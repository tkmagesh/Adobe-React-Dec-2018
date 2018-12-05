import React from 'react';

class BugItem extends React.PureComponent{
	render(){
		let { bug, toggle } = this.props;
		console.log('bugItem rendered - ', bug.name);
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span 
					className={bugStyle}
					onClick={() => toggle(bug)}
					>
					{JSON.stringify(bug)}
				</span>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}
export default BugItem;