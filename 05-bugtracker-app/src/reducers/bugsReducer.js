let defaultBugState = {
	list : [],
	filtered : false
};

function bugsReducer(currentState = defaultBugState, action){
	if (action.type === 'LOAD'){
		return { list : action.payload, filtered : false };
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		// currentState.push(newBug); -- no mutation
		let newState = {...currentState, list : [...currentState.list, newBug] };
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload;
		let newState = {...currentState, list : currentState.list.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug) };
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = {...currentState, list : currentState.list.filter(bug => bugsToRemove.id !== bug.id) };
		return newState;
	}
	if (action.type === 'TOGGLE_FILTER'){
		let newState = {...currentState, filtered : !currentState.filtered};
		return newState;
	}
	return currentState;
}

export default bugsReducer;