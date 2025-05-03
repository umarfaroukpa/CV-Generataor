import React from 'react';
import '../styles/Footer.css'; 

function Footer() {
    return (
        <div className="footer">
            <footer className="footer-content">
                <p>Umar Farouk Ilyas &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}

export default Footer;