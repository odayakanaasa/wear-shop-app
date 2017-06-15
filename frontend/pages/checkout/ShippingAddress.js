import React from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const ShippingAddress = ({ textFieldDefaultProps, selectFieldDefaultProps, addressData, onTextFieldChange, onCountryChange }) => {
	const handleAddressChange = (e, newValue) => {
		onTextFieldChange(newValue, "shippingAddress", "address");
	};

	const handleCityChange = (e, newValue) => {
		onTextFieldChange(newValue, "shippingAddress", "city");
	};

	const handleStateChange = (e, newValue) => {
		onTextFieldChange(newValue, "shippingAddress", "state");
	};

	const handleZipCodeChange = (e, newValue) => {
		onTextFieldChange(newValue, "shippingAddress", "zipCode");
	};

	return (
		<div>
			<TextField 
				{ ...textFieldDefaultProps } 
				floatingLabelText="Address" 
				errorText={ addressData.isAddressValid ? "" : "Invalid Address. Example: 345 Spear Street" }
				value={ addressData.address } 
				onChange={ handleAddressChange }
			/>
			<TextField 
				{ ...textFieldDefaultProps } 
				floatingLabelText="City" 
				errorText={ addressData.isCityValid ? "" : "Invalid City. Example: San Francisco" }
				value={ addressData.city } 
				onChange={ handleCityChange }
			/>
			<div className="row">
				<div className="col half-width">
					<TextField 
						{ ...textFieldDefaultProps } 
						floatingLabelText="State" 
						errorText={ addressData.isStateValid ? "" : "Invalid State. Example: CA" }
						value={ addressData.state } 
						onChange={ handleStateChange }
					/>
				</div>
				<div className="col half-width">
					<TextField 
						{ ...textFieldDefaultProps } 
						floatingLabelText="Zip Code" 
						errorText={ addressData.isZipCodeValid ? "" : "Invalid Zip Code. Example: 94105" }
						value={ addressData.zipCode } 
						onChange={ handleZipCodeChange }
					/>
				</div>
			</div>
			<SelectField
				{ ...selectFieldDefaultProps }
				floatingLabelText="Country"
				value={ addressData.country } 
				onChange={ onCountryChange }
			>
				<MenuItem value="United States" primaryText="United States" />
				<MenuItem value="Canada" primaryText="Canada" />
			</SelectField>
		</div>
	);
};

ShippingAddress.propTypes = {
	textFieldDefaultProps: PropTypes.object.isRequired,
	selectFieldDefaultProps: PropTypes.object.isRequired,
	addressData: PropTypes.object.isRequired,
	onTextFieldChange: PropTypes.func.isRequired,
	onCountryChange: PropTypes.func.isRequired,
};

export default ShippingAddress;