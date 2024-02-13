import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DogOwnerAdminDB.css';

function DogOwnersPage() {
  const [dogHandlers, setDogHandlers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/handlers'); // Adjust URL based on your API endpoint
      setDogHandlers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckboxChange = (event, ownerId) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, ownerId]);
    } else {
      setSelectedRows(selectedRows.filter(id => id !== ownerId));
    }
  };

  const handleUpdate = async () => {
    try {
      // Implement update logic for selected rows
      await Promise.all(selectedRows.map(async (key) => {
        // Fetch the specific row data from the server
        const response = await axios.get(`http://localhost:5000/handlers/${key}`);
        const rowData = response.data;

        // Prompt the admin to update the data (e.g., using a modal or form)
        console.log('Updating row:', rowData);
        // Once the admin updates the data, send the updated data back to the server
        // await axios.put(`http://localhost:5000/dog-owners/${id}`, updatedData);
      }));
    } catch (error) {
      console.error('Error updating rows:', error);
    }
  };

  const handleDelete = async () => {
    try {
      // Implement delete logic for selected rows
      await Promise.all(selectedRows.map(async (key) => {
        // Delete the row from the server
        await axios.delete(`http://localhost:5000/handlers/${key}`);
        console.log('Deleted row:', key);
      }));
      // After deleting rows, refetch the data to update the table
      fetchData();
    } catch (error) {
      console.error('Error deleting rows:', error);
    }
  };
  return (
    <div className="dog-owners-page">
      <h2>Dog Handlers</h2>
      <div className="action-buttons">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Location</th>
            
          </tr>
        </thead>
        <tbody>
          {dogHandlers.map((handler, key) => (
            <tr key={key}>
                
              <td><input type="checkbox" onChange={(event) => handleCheckboxChange(event, handler.key)} /></td>
              <td>{handler.name}</td>
              <td>{handler.age}</td>
              <td>{handler.experience}</td>
              <td>{handler.location}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DogOwnersPage;
