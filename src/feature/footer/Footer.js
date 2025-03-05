import React from 'react';


const Footer = () => {
  const industries = [
    "Vegetable", "Grocery", "Education", "E-Commerce",
    "Travel", "Food Delivery", "Network Marketing"
  ];

  const services = [
    "Web Development", "Mobile App Development", "Digital Marketing",
    "Web Hosting", "Email Hosting & Marketing", "Point Of Sale", "CRM"
  ];

  const insights = [
    "Careers", "Start Your Business", "Certificate",
    "Our Blog", "Website Package", "Mobile Package", "SMO Package"
  ];

  const socialIcons = ["fab fa-facebook", "fab fa-instagram", "fab fa-twitter"];

  return (
    <footer className="footer-container">
      <FooterSection title="INDUSTRIES" items={industries} />
      <FooterSection title="OUR SERVICES" items={services} />
      <FooterSection title="INSIGHTS" items={insights} />

      <div className="footer-section">
        <h3 className="footer-heading">HOW TO REACH US</h3>
        <p>📞 +91-819000 9005</p>
        <p>✉️ miswaysolutions@gmail.com</p>
        <div className="social-icons">
          {socialIcons.map((icon, index) => (
            <i key={index} className={icon}></i>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Minsway Solutions Pvt. Ltd. | 
          <a href="#"> Terms & Conditions</a> | 
          <a href="#"> Privacy Policy</a> | 
          <a href="#"> Agreement</a>
        </p>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, items }) => (
  <div className="footer-section">
    <h3 className="footer-heading">{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;

