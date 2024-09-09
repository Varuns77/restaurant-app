import React, { useState } from "react";
// import swal from "sweetalert";
import { useDelivery } from "../../contexts/DeliveryProvider";
import useAuth from "../../hooks/useAuth";
import TextField from "../Form/TextField";

const DeliveryForm = () => {
	const { user } = useAuth();

	const [change, setChange] = useState({
		name: `${user.displayName}`,
		email:"",
		phnNo:"",
		flatno: "",
		roadNo: "",
		country: "",
		postalCode: "",
	});
	const { setInput, setDisabled } = useDelivery();

	//handle Change
	const handleChange = (e) => {
		const { value, name } = e.target;
		setChange((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	//handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setInput({
			name: change.name,
			email: change.email,
			phnNo: change.phnNo,
			flatno: change.flatno,
			roadNo: change.roadNo,
			country: change.country,
			postalCode: change.postalCode
		});
		swal(
			"Information Updated!",
			"Your shipping details updated successfully!",
			"success"
		);
		setDisabled(false);
	};

	return (
		<div className="flex flex-col mt-10">
			<h1 className="text-2xl forum font-bold pb-2 border-b border-gray-500 text-red-700">
				Delivery Details
			</h1>
			<form className="my-4" onSubmit={handleSubmit}>
				<div className="flex flex-col space-y-3 forum font-bold text-md">
				<TextField
						type="text"
						placeholder="Delivery to"
						name="name"
						value={change.name}
						onChange={handleChange}
						required
					/>
					<TextField
						type="text"
						placeholder="Enter your Email Address"
						name="email"
						value={change.email}
						onChange={handleChange}
						required
					/>
					<TextField
						type="number"
						placeholder="Enter your Number"
						name="phnNo"
						value={change.phnNo}
						onChange={handleChange}
						required
					/>
					<TextField
							type="text"
							placeholder="Flat, suite or floor"
							name="flatno"
							value={change.flatno}
							onChange={handleChange}
							required
						/>
					<TextField
						type="text"
						placeholder="Road Name and Road No"
						name="roadNo"
						value={change.roadNo}
						onChange={handleChange}
						required
					/>

					<TextField
						type="text"
						placeholder="Country and District"
						name="country"
						value={change.country}
						onChange={handleChange}
						required
					/>

						
					<TextField
						type="text"
						placeholder="Postal Code"
						name="postalCode"
						value={change.postalCode}
						onChange={handleChange}
						required
					/>
					<button className="w-full px-6 py-3 rounded-lg bg-primary text-white forum transition duration-500">
						Save & Continue
					</button>
				</div>
			</form>
		</div>
	);
};

export default DeliveryForm;
