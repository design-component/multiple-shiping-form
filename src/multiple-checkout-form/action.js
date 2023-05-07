// initial state
export const initialState = {
	InitialItems: {
		id: 1,
		name: null,
		phone: null,
		email: null,
		city: null,
		address: null,
		color: null,
		size: null,
		qty: 0,
	},
	selected: [
		{
			id: 1,
			name: null,
			phone: null,
			email: null,
			city: null,
			address: null,
			color: null,
			size: null,
			qty: 0,
		},
	],
	apiData: [],
};
// all logic
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// change text
		case 'TEXT':
			return {
				...state,
				InitialItems: {
					...state.InitialItems,
					[action.payload.name]: action.payload.value,
				},
			};

		// delete fields
		case 'DELETE':
			return {
				...state,
				fields: state.fields.filter((e) => e.id !== action.payload),
			};

		default:
			return {
				state,
			};
	}
};
