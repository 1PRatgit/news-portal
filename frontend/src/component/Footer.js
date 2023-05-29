import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis eu arcu consequat posuere.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              123 Street, City<br />
              State, Country<br />
              Phone: 123-456-7890<br />
              Email: info@example.com
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mb-0">&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
