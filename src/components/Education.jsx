import { useState, useEffect } from 'react';
import '../styles/FormSection.css';

function Education({ education, onChange }) {
  const [formData, setFormData] = useState({ ...education });

  useEffect(() => {
    setFormData({ ...education });
  }, [education]);

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
      <h2>Education</h2>
      
      <div className="form-group">
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleInputChange}
          placeholder="e.g. University of Technology"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="titleOfStudy">Title of Study</label>
        <input
          type="text"
          id="titleOfStudy"
          name="titleOfStudy"
          value={formData.titleOfStudy}
          onChange={handleInputChange}
          placeholder="e.g. Computer Science"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="dateOfStudy">Date of Study</label>
        <input
          type="text"
          id="dateOfStudy"
          name="dateOfStudy"
          value={formData.dateOfStudy}
          onChange={handleInputChange}
          placeholder="e.g. 2018-2022"
          required
        />
      </div>
    </div>
  );
}

export default Education;