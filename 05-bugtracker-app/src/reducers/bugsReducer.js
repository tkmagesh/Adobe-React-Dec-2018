let defaultBugState = {
	list : [],
	filtered : false
};

function bugsReducer(currentState = defaultBugState, action){
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		// currentState.push(newBug); -- no mutation
		let newState = {...currentState, list : [...currentState.list, newBug] };
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload;
		let newState = {...currentState, list : currentState.list.map(bug => bug.name === bugToReplace.name ? bugToReplace : bug) };
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = {...currentState, list : currentState.list.filter(bug => bugsToRemove.indexOf(bug) < 0) };
		return newState;
	}
	if (action.type === 'TOGGLE_FILTER'){
		let newState = {...currentState, filtered : !currentState.filtered};
		return newState;
	}
	return currentState;
}

export default bugsReducer;