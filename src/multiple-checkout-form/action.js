// // initial state
// export const initialState = {
// 	InitialItems: {
// 		id: 1,
// 		name: null,
// 		phone: null,
// 		email: null,
// 		city: null,
// 		address: null,
// 		color: null,
// 		size: null,
// 		qty: 0,
// 		variants: [{ id: 1, color: null, size: null, qty: 0 }],
// 	},
// 	selected: [],
// 	apiData: {},
// };
// // all logic
// export const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'CREATE':
// 			return {
// 				...state,
// 				InitialItems: {
// 					id: 1,
// 					name: null,
// 					phone: null,
// 					email: null,
// 					city: null,
// 					address: null,
// 					color: null,
// 					size: null,
// 					qty: 0,
// 					variants: [{ id: 1, color: null, size: null, qty: 0 }],
// 				},
// 				selected: [...state.selected, action.payload],
// 			};
// 		// change text
// 		case 'TEXT':
// 			return {
// 				...state,
// 				InitialItems: {
// 					...state.InitialItems,
// 					[action.payload.name]: action.payload.value,
// 				},
// 				// selected: state.selected.map((e) =>
// 				// 	e.id === action.payload.id
// 				// 		? {
// 				// 				...e,
// 				// 				size: action.payload.size,
// 				// 				color: action.payload.color,
// 				// 				[action.payload.name]: action.payload.value,
// 				// 		  }
// 				// 		: { ...e }
// 				// ),
// 			};

// 		// e.id === action.payload.id
// 		// 				? {
// 		// 						id: action.payload.id,
// 		// 						name: action.payload.name,
// 		// 						qty: action.payload.value,
// 		// 						size: action.payload.size,
// 		// 						color: action.payload.color,
// 		// 				  }
// 		// 				: { ...e }

// 		// variant Data
// 		case 'VARIANT':
// 			return {
// 				...state,
// 				InitialItems: {
// 					...state.InitialItems,
// 					variants: state.InitialItems.variants.map((e) => {
// 						if (e.id === action.payload.id) {
// 							return {
// 								id: action.payload.id,
// 								name: action.payload.name,
// 								qty: action.payload.value,
// 								size: action.payload.size,
// 								color: action.payload.color,
// 							};
// 						} else if (e.id !== action.payload.id) {
// 							return state.InitialItems.variants.push({
// 								id: action.payload.id,
// 								name: action.payload.name,
// 								qty: action.payload.value,
// 								size: action.payload.size,
// 								color: action.payload.color,
// 							});
// 						} else {
// 							return e;
// 						}
// 					}),

// 					// variants: [
// 					// 	...state.InitialItems.variants,
// 					// 	{
// 					// 		id: action.payload.id,
// 					// 		name: action.payload.name,
// 					// 		value: action.payload.value,
// 					// 		size: action.payload.size,
// 					// 		color: action.payload.color,
// 					// 	},
// 					// ],
// 				},
// 			};
// 		// Api Data
// 		case 'API_DATA':
// 			return {
// 				...state,
// 				apiData: action.payload,
// 			};
// 		// Edit fields Not Complete
// 		case 'EDIT':
// 			return {
// 				...state,
// 				selected: state.selected.filter((e) => e.id !== action.payload),
// 			};

// 		// delete fields
// 		case 'DELETE':
// 			return {
// 				...state,
// 				selected: state.selected.filter((e) => e.id !== action.payload),
// 			};

// 		default:
// 			return {
// 				state,
// 			};
// 	}
// };

// variants: state.InitialItems.variants.map((e) => {
// 	if (e.id === action.payload.id) {
// 		return {
// 			id: action.payload.id,
// 			qty: action.payload.value,
// 			size: action.payload.size,
// 			color: action.payload.color,
// 		};
// 	} else if (e.id !== action.payload.id) {
// 		return {
// 			id: action.payload.id,
// 			qty: action.payload.value,
// 			size: action.payload.size,
// 			color: action.payload.color,
// 		};
// 	} else {
// 		return e;
// 	}
// }),

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

// e.id === action.payload.id
// 				? {
// 						id: action.payload.id,
// 						name: action.payload.name,
// 						qty: action.payload.value,
// 						size: action.payload.size,
// 						color: action.payload.color,
// 				  }
// 				: { ...e }

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

// initial state
export const initialState = {
	InitialItems: {
		id: 1,
		name: null,
		phone: null,
		email: null,
		city: null,
		address: null,
		vendor_id: null,
		product_id: null,
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
					vendor_id: null,
					product_id: null,
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
			};

		case 'VARIANT':
			// Check if variant with the same ID already exists in the variants array
			const existingVariantIndex = state.InitialItems.variants.findIndex(
				(v) => v.id === action.payload.id
			);
			if (existingVariantIndex !== -1) {
				// If the variant exists, update its values
				const updatedVariants = state.InitialItems.variants.map((v, index) => {
					if (index === existingVariantIndex) {
						return {
							...v,
							qty: action.payload.value,
							size: action.payload.size,
							color: action.payload.color,
						};
					} else {
						return v;
					}
				});
				return {
					...state,
					InitialItems: {
						...state.InitialItems,
						product_id: action.payload.product_id,
						vendor_id: action.payload.vendor_id,
						variants: updatedVariants,
					},
				};
			} else {
				// If the variant doesn't exist, add a new object with a unique ID
				const newVariant = {
					id: state.InitialItems.variants.length + 1,
					qty: action.payload.value,
					size: action.payload.size,
					color: action.payload.color,
				};
				return {
					...state,
					InitialItems: {
						...state.InitialItems,
						product_id: action.payload.product_id,
						vendor_id: action.payload.vendor_id,
						variants: [...state.InitialItems.variants, newVariant],
					},
				};
			}

		// variant Data
		case 'VARIANTs':
			return {
				// ...state,
				// InitialItems: {
				// 	...state.InitialItems,
				// 	product_id: action.payload.product_id,
				// 	vendor_id: action.payload.vendor_id,
				// 	variants: [
				// 		...state.InitialItems.variants,
				// 		{
				// 			id: action.payload.id,
				// 			qty: action.payload.value,
				// 			size: action.payload.size,
				// 			color: action.payload.color,
				// 		},
				// 	],
				// variants: state.InitialItems.variants.map((e) =>
				// 	e.id === action.payload.id
				// 		? {
				// 				id: action.payload.id,
				// 				qty: action.payload.value,
				// 				size: action.payload.size,
				// 				color: action.payload.color,
				// 		  }
				// 		: { ...e }
				// ),
				// },
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
