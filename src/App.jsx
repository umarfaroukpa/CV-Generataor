import { useState } from 'react';
import Header from './components/Header.jsx';
import CVForm from './components/Form.jsx';
import CVPreview from './components/CVPreview.jsx';
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

  const handleDataUpdate = (section, data) => {
    setCVData({
      ...cvData,
      [section]: data
    });
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="app">
      <Header />
      <div className="cv-container">
        {isEditing ? (
          <CVForm
            cvData={cvData}
            onDataUpdate={handleDataUpdate}
            onSubmit={handleSubmit}
          />
        ) : (
          <CVPreview
            cvData={cvData}
            onEdit={handleEdit}
          />
        )}
      </div>
      <Footer />
    </div>

  );
}

export default App;