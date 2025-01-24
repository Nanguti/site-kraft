"use client";

import React, { useState } from "react";
import { Menu, Bell, User, LogOut, Settings } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center justify-center"
      >
        <Menu />
      </button>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Notification and Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative">
          <Bell className="w-5 h-5" />
          <span
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 
          h-4 flex items-center justify-center text-xs"
          >
            3
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <ul className="py-1">
                <li>
                  <a
                    href="/admin/profile"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <User className="mr-2 w-4 h-4" /> Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/settings"
                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <Settings className="mr-2 w-4 h-4" /> Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      /* Logout logic */
                    }}
                    className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <LogOut className="mr-2 w-4 h-4" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
