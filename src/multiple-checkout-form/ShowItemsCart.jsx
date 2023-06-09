import React from 'react';

function ShowItemsCart({ data, dispatch }) {
	console.log(data);
	return (
		<div className="card bg-primary-subtle mt-4">
			<div className="card-body">
				<div className="text-section">
					<h5 className="card-title fw-bold">{data?.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card's content.
					</p>
				</div>
				<div className="cta-section">
					<div>$129.00</div>
					<p>this </p>
				</div>
				{data?.variants?.map((e) => (
					<li>adsf</li>
				))}
				<button
					onClick={(e) =>
						dispatch({
							type: 'DELETE',
							payload: data.id,
						})
					}
				>
					del
				</button>
				{/* <button
					onClick={(e) =>
						dispatch({
							type: 'EDIT',
							payload: data.id,
						})
					}
				>
					edit
				</button> */}
			</div>
		</div>
	);
}

export default ShowItemsCart;
