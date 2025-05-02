import { useState, useEffect } from 'react';
import '../styles/FormSection.css';

function GeneralInfo({ generalInfo, onChange }) {
  const [formData, setFormData] = useState({ ...generalInfo });

  useEffect(() => {
    setFormData({ ...generalInfo });
  }, [generalInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value
    };
    
    setFormData(updatedData);
    onChange(updatedData);
  };

  return (
    <div className="form-section">
      <h2>General Information</h2>
      
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g. John Doe"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="e.g. john.doe@example.com"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="e.g. (123) 456-7890"
          required
        />
      </div>
    </div>
  );
}

export default GeneralInfo;