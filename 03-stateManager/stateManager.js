var SM = (function(){	
	var _currentState = undefined,
		_subscribers = [],
		_reducer = null,
		__init_action = '@@INIT_ACTION'


	function getState(){
		return _currentState;
	}

	function subscribe(callback){
		if (typeof callback === 'function')
			_subscribers.push(callback);
	}

	function triggerChange(){
		_subscribers.forEach(callback => callback());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, __init_action);
		return { getState, subscribe, dispatch };
	}

	function bindActionCreators(actionCreator, dispatch){
		let result = {};
		for(let key in actionCreator){
			result[key] = function(){
				var action = actionCreator[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };

})();