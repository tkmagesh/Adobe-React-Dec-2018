import React from 'react';

let BugItem = function({ bug, toggle }){
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
};
export default BugItem;