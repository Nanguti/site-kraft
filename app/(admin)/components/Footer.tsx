import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-4 text-center">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Admin Panel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
