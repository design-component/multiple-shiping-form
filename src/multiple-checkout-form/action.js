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
		variants: [{ id: 1, color: null, size: null, qty: 0 }],
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
					id: 1,
					name: null,
					phone: null,
					email: null,
					city: null,
					address: null,
					color: null,
					size: null,
					qty: 0,
					variants: [{ id: 1, color: null, size: null, qty: 0 }],
				},
				selected: [...state.selected, action.payload],
			};
		// change text
		case 'TEXT':
			return {
				...state,
				InitialItems: {
					...state.InitialItems,
					[action.payload.name]: action.payload.value,
				},
				// selected: state.selected.map((e) =>
				// 	e.id === action.payload.id
				// 		? {
				// 				...e,
				// 				size: action.payload.size,
				// 				color: action.payload.color,
				// 				[action.payload.name]: action.payload.value,
				// 		  }
				// 		: { ...e }
				// ),
			};

		// e.id === action.payload.id
		// 				? {
		// 						id: action.payload.id,
		// 						name: action.payload.name,
		// 						qty: action.payload.value,
		// 						size: action.payload.size,
		// 						color: action.payload.color,
		// 				  }
		// 				: { ...e }

		// variant Data
		case 'VARIANT':
			return {
				...state,
				InitialItems: {
					...state.InitialItems,
					variants: state.InitialItems.variants.map((e) => {
						if (e.id === action.payload.id) {
							return {
								id: action.payload.id,
								name: action.payload.name,
								qty: action.payload.value,
								size: action.payload.size,
								color: action.payload.color,
							};
						} else if (e.id !== action.payload.id) {
							return state.InitialItems.variants.push({
								id: action.payload.id,
								name: action.payload.name,
								qty: action.payload.value,
								size: action.payload.size,
								color: action.payload.color,
							});
						} else {
							return e;
						}
					}),

					// variants: [
					// 	...state.InitialItems.variants,
					// 	{
					// 		id: action.payload.id,
					// 		name: action.payload.name,
					// 		value: action.payload.value,
					// 		size: action.payload.size,
					// 		color: action.payload.color,
					// 	},
					// ],
				},
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
