import React, { useState } from 'react';
import DogOwnerForm from '../helpers/DogOwnerForm';
import VehicleOwnerForm from '../helpers/VehicleOwnersForm';
import DogHandlerForm from '../helpers/DogHandlerForm';

export default function RegistrationFormSelector() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    let selectedForm;
    if (selectedOption === 'dogOwner') {
        selectedForm = <DogOwnerForm />;
    } else if (selectedOption === 'vehicleOwner') {
        selectedForm = <VehicleOwnerForm />;
    } else if (selectedOption === 'dogHandler') {
        selectedForm = <DogHandlerForm />;
    }

    return (
        <div>
            <h2>Select Registration Type:</h2>
            <select onChange={handleOptionChange}>
                <option value="">Select...</option>
                <option value="dogOwner">Dog Owner</option>
                <option value="vehicleOwner">Vehicle Owner</option>
                <option value="dogHandler">Dog Handler</option>
            </select>
            {selectedForm}
        </div>
    );
}
