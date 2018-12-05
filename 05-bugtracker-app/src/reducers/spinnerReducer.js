function spinnerReducer(currentState = 0, action){
	if (action.type === 'UP') return currentState + 1;
	if (action.type === 'DOWN') return currentState - 1;
	return currentState;
}
export default spinnerReducer;