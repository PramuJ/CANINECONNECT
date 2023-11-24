import React, { useState } from 'react';

export default function DogOwnerForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Vehicle_name, setVehicleName] = useState('');
    const [address, setAddress] = useState('');
    const [City , setCity] = useState('');
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, such as sending data to an API
        console.log('Form submitted:', { Vehicle_name,fullName, email, phoneNumber,address, City });
    };

    return (
        <div>
            <h2>Dog Owner Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Vehicle_name">Vehicle Name</label>
                    <input type="text" id="Vehicle_name" value={Vehicle_name} onChange={(e) => setVehicleName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="Owner's Name">Owner's Name</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="Address">Address:</label>
                    <input type="Address" id="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="City">City</label>
                    <input type="City" id="City" value={City} onChange={(e) => setCity(e.target.value)} required />
                </div>
              
        
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
