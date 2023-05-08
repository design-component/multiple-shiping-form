import React from 'react';
import ShowItemsCart from './ShowItemsCart';

function InputFields({ state, dispatch }) {
	console.log(state);
	return (
		<div className="needs-validation">
			<div className="row">
				<div className="col-md-6 mb-3">
					<label htmlFor="firstName">First name</label>
					<input
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="text"
						className="form-control"
						id="firstName"
						placeholder="Enter Name Here"
						name="name"
						required
					/>
					<div className="invalid-feedback">Valid first name is required.</div>
				</div>
				<div className="col-md-6 mb-3">
					<label htmlFor="phone">Phone Number</label>
					<input
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="number"
						className="form-control"
						id="phone"
						placeholder="017********"
						name="phone"
						required
					/>
					<div className="invalid-feedback">
						Please enter a valid email address for shipping updates.
					</div>
				</div>
				<div className="mb-3 col-md-6">
					<label htmlFor="email">
						Email <span className="text-muted">(Optional)</span>
					</label>
					<input
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="email"
						className="form-control"
						id="email"
						placeholder="you@example.com"
						name="email"
					/>
					<div className="invalid-feedback">
						Please enter a valid email address for shipping updates.
					</div>
				</div>
				<div className="mb-3 col-md-6">
					<label htmlFor="city">City</label>
					<input
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="text"
						className="form-control"
						id="city"
						placeholder="Dhaka"
						required
						name="city"
					/>
					<div className="invalid-feedback">
						Please enter your shipping address.
					</div>
				</div>
			</div>

			<div className="mb-3 ">
				<label htmlFor="address">Full Address</label>
				<textarea
					onChange={(e) =>
						dispatch({
							type: 'TEXT',
							payload: {
								name: e.target.name,
								value: e.target.value,
							},
						})
					}
					type="text"
					className="form-control"
					id="address"
					placeholder="1234 Main St"
					name="address"
					required
				></textarea>

				<div className="invalid-feedback">
					Please enter your shipping address.
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<label className="form-label"> Color</label>

					<select
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						name="color"
						className="form-control here set-slug"
						aria-label=".form-select-sm example"
					>
						<option>---</option>
						<option>---</option>
						<option>---</option>
					</select>
				</div>
				<div className="col-md-4">
					<label className="form-label"> Size</label>

					<select
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						name="color"
						className="form-control here set-slug"
						aria-label=".form-select-sm example"
					>
						<option>---</option>
						<option>---</option>
						<option>---</option>
					</select>
				</div>
				<div className=" col-md-4">
					<label className="form-label" htmlFor="qty">
						Quantity
					</label>
					<input
						onChange={(e) =>
							dispatch({
								type: 'TEXT',
								payload: {
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="number"
						className="form-control"
						id="qty"
						placeholder="01"
						required
						name="qty"
					/>
					<div className="invalid-feedback">
						Please enter your shipping address.
					</div>
				</div>
			</div>
			<div className="text-end">
				<button
					onClick={(e) =>
						dispatch({
							type: 'CREATE',
						})
					}
					className="btn btn-success btn-lg btn-block"
					type="submit"
				>
					create
				</button>
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
				{state.selected.map((e, i) => (
					<ShowItemsCart data={e} key={i} />
				))}
			</div>

			<hr className="mb-4" />
			<button className="btn btn-primary btn-lg btn-block" type="submit">
				Continue to checkout
			</button>
		</div>
	);
}

export default InputFields;
