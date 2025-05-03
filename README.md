# CV Generator

A React application that allows users to create and customize their professional CV/résumé with ease.

![CV Generator Screenshot](https://via.placeholder.com/800x450)

## Features

- **Interactive Form**: Enter your personal information, education history, and work experience
- **Real-time Preview**: See how your CV looks as you build it
- **Edit and Update**: Modify your information at any time
- **Clean, Professional Design**: Present your credentials in a polished format
- **Responsive Layout**: Works on desktop and mobile devices

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Installation

To run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/umarfaroukpa/CV-Generataor.git
cd cv-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Fill in the form with your personal information:
   - General details (name, email, phone)
   - Education history
   - Professional experience

2. Click "Generate CV" to see your completed résumé

3. Click "Edit" to make changes if needed

## Project Structure

```
cv-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── CVForm.jsx
│   │   ├── CVPreview.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── GeneralInfo.jsx
│   │   └── Header.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── CVForm.css
│   │   ├── CVPreview.css
│   │   ├── FormSection.css
│   │   └── Header.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **CSS**: Custom styling for components
- **React Hooks**: For state management (useState, useEffect)

## Development

This project was built with React and Vite. The application uses React's component-based architecture to create a modular and maintainable codebase.

### Key Components

- **App.jsx**: Main container component that manages application state
- **CVForm.jsx**: Form container with sections for different information types
- **CVPreview.jsx**: Displays the formatted CV based on user input
- **Form Section Components**: Individual components for each section of information

### State Management

The application uses React's useState hook for state management:
- Main CV data is stored in the App component
- Each form section manages its own local state
- Data flows down through props and changes flow up through callback functions

## Deployment

You can deploy this application using any of the following platforms:

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Add homepage to package.json:
```json
"homepage": "https://yourusername.github.io/cv-generator"
```

4. Deploy:
```bash
npm run deploy
```

### Netlify

1. Create a Netlify account
2. Connect your GitHub repository
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.