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
	apiData: {},
};
// all logic
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE':
			return {
				...state,
				InitialItems: {
					...state.InitialItems,
					id: state.selected[state.selected.length - 1]?.id + 1 || 1,
				},
				selected: [
					...state.selected,
					{
						...state.InitialItems,
						id: state.selected[state.selected.length - 1]?.id + 1 || 1,
					},
				],
			};
		// change text
		case 'TEXT':
			return {
				...state,
				InitialItems: {
					...state.InitialItems,
					[action.payload.name]: action.payload.value,
				},
				selected: state.selected.map((e) =>
					e.id === action.payload.id
						? {
								...e,
								size: action.payload.size,
								color: action.payload.color,
								[action.payload.name]: action.payload.value,
						  }
						: { ...e }
				),
			};

		// Api Data
		case 'API_DATA':
			return {
				...state,
				apiData: action.payload,
			};
		// Edit fields Not Complete
		case 'EDIT':
			return {
				...state,
				selected: state.selected.filter((e) => e.id !== action.payload),
			};

		// delete fields
		case 'DELETE':
			return {
				...state,
				selected: state.selected.filter((e) => e.id !== action.payload),
			};

		default:
			return {
				state,
			};
	}
};
