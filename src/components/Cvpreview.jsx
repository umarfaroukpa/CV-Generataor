import React from 'react';
import '../styles/CVPreview.css';

function CVPreview({ cvData, onEdit }) {
  const { generalInfo, education, experience } = cvData;

  return (
    <div className="cv-preview">
      <div className="preview-header">
        <h2>CV Preview</h2>
        <button onClick={onEdit} className="edit-btn">Edit</button>
      </div>

      <div className="preview-section">
        <h3>General Information</h3>
        <div className="preview-content">
          <p className="preview-name">{generalInfo.name}</p>
          <div className="preview-contact">
            <p><strong>Email:</strong> {generalInfo.email}</p>
            <p><strong>Phone:</strong> {generalInfo.phone}</p>
          </div>
        </div>
      </div>

      <div className="preview-section">
        <h3>Education</h3>
        <div className="preview-content">
          <p className="preview-institution">{education.schoolName}</p>
          <p><strong>Degree:</strong> {education.titleOfStudy}</p>
          <p><strong>Date:</strong> {education.dateOfStudy}</p>
        </div>
      </div>

      <div className="preview-section">
        <h3>Professional Experience</h3>
        <div className="preview-content">
          <div className="preview-job">
            <div className="job-header">
              <p className="preview-company">{experience.companyName}</p>
              <p className="preview-dates">{experience.dateFrom} - {experience.dateTo}</p>
            </div>
            <p className="preview-position">{experience.positionTitle}</p>
            <p className="preview-responsibilities">{experience.responsibilities}</p>
          </div>
        </div>
      </div>

      <div className="preview-actions">
        <button onClick={onEdit} className="edit-btn">Edit CV</button>
      </div>
    </div>
  );
}

export default CVPreview;