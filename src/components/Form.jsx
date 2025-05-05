import React from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVForm.css';

function Form({ cvData, onDataUpdate, onSubmit }) {
  const handleGeneralInfoChange = (generalInfo) => {
    onDataUpdate('generalInfo', generalInfo);
  };

  const handleEducationChange = (education) => {
    onDataUpdate('education', education);
  };

  const handleExperienceChange = (experience) => {
    onDataUpdate('experience', experience);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="cv-form" onSubmit={handleSubmit}>
      <GeneralInfo
        generalInfo={cvData.generalInfo}
        onChange={handleGeneralInfoChange}
      />

      <Education
        education={cvData.education}
        onChange={handleEducationChange}
      />

      <Experience
        experience={cvData.experience}
        onChange={handleExperienceChange}
      />

      <div className="form-actions">
        <button type="submit" className="submit-btn">Generate CV</button>
      </div>
    </form>

  );
}

export default Form;