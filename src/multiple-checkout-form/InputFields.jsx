import React from 'react';
import ShowItemsCart from './ShowItemsCart';

function InputFields({ state, dispatch }) {
	console.log(state.InitialItems.variants);
	const formHandel = (e) => {
		e.preventDefault();
		e.target.reset();
		console.log(e);
		dispatch({
			type: 'CREATE',
			payload: {
				...state.InitialItems,
				id: state.selected[state.selected.length - 1]?.id + 1 || 1,
			},
		});
	};
	return (
		<div className="needs-validation">
			<form onSubmit={formHandel} action="">
				<div className="row">
					<div className="col-md-6 mb-3">
						<label htmlFor="firstName">First name</label>
						<input
							onChange={(e) =>
								dispatch({
									type: 'TEXT',
									payload: {
										id: state.selected[state.selected.length - 1]?.id || 1,
										name: e.target.name,
										value: e.target.value,
									},
								})
							}
							type="text"
							className="form-control"
							id="firstName"
							placeholder="Enter Name Here"
							autoComplete="true"
							name="name"
							defaultValue={
								state.selected[state.selected.length - 1]?.name === null
									? ' '
									: ' '
							}
							required
						/>
						<div className="invalid-feedback">
							Valid first name is required.
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<label htmlFor="phone">Phone Number</label>
						<input
							onChange={(e) =>
								dispatch({
									type: 'TEXT',
									payload: {
										id: state.selected[state.selected.length - 1]?.id || 1,
										name: e.target.name,
										value: e.target.value,
									},
								})
							}
							type="number"
							className="form-control"
							id="phone"
							placeholder="017********"
							autoComplete="true"
							name="phone"
							defaultValue={
								state.selected[state.selected.length - 1]?.phone === null
									? ''
									: ''
							}
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
										id: state.selected[state.selected.length - 1]?.id || 1,
										name: e.target.name,
										value: e.target.value,
									},
								})
							}
							type="email"
							className="form-control"
							id="email"
							placeholder="you@example.com"
							autoComplete="true"
							name="email"
							defaultValue={
								state.selected[state.selected.length - 1]?.email === null
									? ''
									: ''
							}
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
										id: state.selected[state.selected.length - 1]?.id || 1,
										name: e.target.name,
										value: e.target.value,
									},
								})
							}
							type="text"
							className="form-control"
							id="city"
							placeholder="Dhaka"
							autoComplete="true"
							required
							name="city"
							defaultValue={
								state.selected[state.selected.length - 1]?.city === null
									? ''
									: ''
							}
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
									id: state.selected[state.selected.length - 1]?.id || 1,
									name: e.target.name,
									value: e.target.value,
								},
							})
						}
						type="text"
						className="form-control"
						id="address"
						placeholder="1234 Main St"
						autoComplete="true"
						name="address"
						defaultValue={
							state.selected[state.selected.length - 1]?.address === null
								? ''
								: ''
						}
						required
					></textarea>

					<div className="invalid-feedback">
						Please enter your shipping address.
					</div>
				</div>
				{state?.apiData?.cart_details?.map((x, i) => (
					<div className="row" key={i}>
						<h6>Variant {i + 1}</h6>
						<div className="col-md-4">
							<label htmlFor="color">Color</label>
							<input
								type="text"
								className="form-control"
								id="color"
								placeholder="Dhaka"
								autoComplete="true"
								required
								name="color"
								defaultValue={x.color}
								readOnly
							/>
						</div>
						<div className="col-md-4">
							<label htmlFor="color">Size</label>
							<input
								type="text"
								className="form-control"
								id="size"
								placeholder="Dhaka"
								autoComplete="true"
								required
								name="size"
								defaultValue={x.size}
								readOnly
							/>
						</div>
						<div className=" col-md-4">
							<label className="form-label" htmlFor="qty">
								Quantity
							</label>
							<input
								onChange={(e) =>
									dispatch({
										type: 'VARIANT',
										payload: {
											id: i + 1,
											name: e.target.name,
											value: e.target.value,
											size: x.size,
											color: x.color,
										},
									})
								}
								type="number"
								className="form-control"
								id="qty"
								placeholder="00"
								autoComplete="true"
								required
								name="qty"
							/>
							<div className="invalid-feedback">
								Please enter your shipping address.
							</div>
						</div>
					</div>
				))}
				<div className="text-end">
					<button className="btn btn-success btn-lg btn-block" type="submit">
						create
					</button>
				</div>
			</form>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
				{state?.selected
					?.map((e, i) => (
						<ShowItemsCart dispatch={dispatch} data={e} key={i} />
					))
					?.reverse()}
			</div>

			<hr className="mb-4" />
			<button className="btn btn-primary btn-lg btn-block" type="submit">
				Continue to checkout
			</button>
		</div>
	);
}

export default InputFields;
