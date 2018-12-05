import bugApi from '../services/bugApi';

/*function getData(){
	return [
    {
      "id": 1,
      "name": "User actions not recognized",
      "isClosed": false,
      "createdAt": "2018-08-29T09:47:32.505Z"
    },
    {
      "id": 2,
      "name": "Application is not responding",
      "isClosed": false,
      "createdAt": "2018-10-24T11:35:33.772Z"
    }
  ];
}*/
export function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {
				let action = { type : 'LOAD', payload : bugs};
				dispatch(action);
			});
		
		
	}
}