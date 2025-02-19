import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} ShopJoe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
