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
	selected: [],
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
				selected: state.selected.map((e) => {
					if (state.InitialItems.id === 1) {
						return { name: 'old' };
					} else {
						return { name: 'new' };
					}
				}),
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
