import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Formsection.css';

function Experience({ experience, onChange }) {
  const [formData, setFormData] = useState({ ...experience });

  useEffect(() => {
    setFormData({ ...experience });
  }, [experience]);

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
      <h2>Professional Experience</h2>
      
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          placeholder="e.g. Tech Solutions Inc."
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={formData.positionTitle}
          onChange={handleInputChange}
          placeholder="e.g. Software Developer"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="responsibilities">Main Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleInputChange}
          placeholder="Describe your main responsibilities..."
          required
          rows="4"
        />
      </div>
      
      <div className="form-row">
        <div className="form-group half">
          <label htmlFor="dateFrom">From</label>
          <input
            type="text"
            id="dateFrom"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleInputChange}
            placeholder="e.g. Jan 2020"
            required
          />
        </div>
        
        <div className="form-group half">
          <label htmlFor="dateTo">To</label>
          <input
            type="text"
            id="dateTo"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleInputChange}
            placeholder="e.g. Present"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;