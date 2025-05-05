import React from 'react';
import Form from './Form';

// This is a placeholder component to resolve the build error
function CVForm(props) {
  // Simply pass all props to the Form component
  return <Form {...props} />;
}

export default CVForm;