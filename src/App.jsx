import { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; 
import Header from './components/Header.jsx';
import CVPreview from './components/CVPreview.jsx';
import Form from './components/Form.jsx';
import './styles/App.css';
import Footer from './components/Footer.jsx';

function App() {
  const [cvData, setCVData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    education: {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
    },
    experience: {
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: '',
    }
  });

  const [isEditing, setIsEditing] = useState(true);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleDataUpdate = (section, data) => {
    setCVData({
      ...cvData,
      [section]: data
    });
  };

  const handleSubmit = () => {
    setIsEditing(false);
    setPdfGenerated(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleGeneratePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: `${cvData.generalInfo.name} - CV`,
      author: cvData.generalInfo.name,
      subject: 'Curriculum Vitae',
      keywords: 'cv, resume, job application',
    });
    
    // Add a title
    doc.setFontSize(22);
    doc.setTextColor(0, 51, 102); // Dark blue
    doc.text('CURRICULUM VITAE', 105, 20, { align: 'center' });
    
    // Add General Information section
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(cvData.generalInfo.name, 105, 35, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Email: ${cvData.generalInfo.email} | Phone: ${cvData.generalInfo.phone}`, 105, 42, { align: 'center' });
    
    // Add a horizontal line
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.5);
    doc.line(20, 50, 190, 50);
    
    // Education Section
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102); // Dark blue
    doc.text('EDUCATION', 20, 60);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(cvData.education.schoolName, 20, 68);
    
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text(`Degree: ${cvData.education.titleOfStudy}`, 20, 75);
    doc.text(`Date: ${cvData.education.dateOfStudy}`, 20, 82);
    
    // Experience Section
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102); // Dark blue
    doc.text('PROFESSIONAL EXPERIENCE', 20, 95);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${cvData.experience.companyName} (${cvData.experience.dateFrom} - ${cvData.experience.dateTo})`, 20, 103);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(cvData.experience.positionTitle, 20, 110);
    
    // Responsibilities - We'll use splitTextToSize to handle long text with wrapping
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    const splitResponsibilities = doc.splitTextToSize(cvData.experience.responsibilities, 150);
    doc.text(splitResponsibilities, 20, 117);
    
    // Add footer with page numbers
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} of ${pageCount}`, 105, 285, { align: 'center' });
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 290, { align: 'center' });
    }
    
    // Save the PDF with a dynamic name based on user's name
    const fileName = cvData.generalInfo.name 
      ? `${cvData.generalInfo.name.replace(/\s+/g, '_')}_CV.pdf` 
      : 'CV.pdf';
      
    doc.save(fileName);
    
    // Update state to show success message
    setPdfGenerated(true);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {isEditing ? (
          <Form 
            cvData={cvData} 
            onDataUpdate={handleDataUpdate} 
            onSubmit={handleSubmit} 
          />
        ) : (
          <div className="preview-container">
            <CVPreview 
              cvData={cvData} 
              onEdit={handleEdit} 
              onGenerate={handleGeneratePDF} 
            />
            {pdfGenerated && (
              <div className="pdf-success-message">
                <p>PDF successfully generated! Check your downloads folder.</p>
                <button onClick={() => setPdfGenerated(false)}>Close</button>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;