import React, { useReducer } from 'react';
import InputFields from './InputFields';
import { initialState, reducer } from './action';

function Main() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<InputFields state={state} dispatch={dispatch} />
		</div>
	);
}

export default Main;
