import React, { useState } from 'react';

export default function DogOwnerForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Dog_name, setDogName] = useState('');
    const [Dog_breed, setDogBreed] = useState('');
    const [previousHistory, setPreviousHistory] = useState('');
    const [address, setAddress] = useState('');
    const [city , setCity] = useState('');
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here, such as sending data to an API
        console.log('Form submitted:', { fullName, email, phoneNumber,Dog_name,Dog_breed,previousHistory, address, city });
    };

    return (
        <div>
            <h2>Dog Owner Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
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
                    <label htmlFor="Dog_name"> Dog Name:</label>
                    <input type="text" id="Dog_name" value={Dog_name} onChange={(e) => setDogName(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="Dog_breed"> Dog Breed:</label>
                    <input type="text" id="Dog_breed" value={Dog_breed} onChange={(e) => setDogBreed(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="previousHistory">Previous Dog Ownership History:</label>
                    <textarea id="previousHistory" value={previousHistory} onChange={(e) => setPreviousHistory(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
