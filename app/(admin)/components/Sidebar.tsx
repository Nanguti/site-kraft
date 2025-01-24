"use client";

import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      href: "/admin/users",
      icon: Users,
      label: "Users",
    },
    {
      href: "/admin/blog",
      icon: FileText,
      label: "Blog",
    },
  ];

  return (
    <aside
      className={`
      bg-white border-r border-gray-200 
      fixed md:static z-40 h-full 
      transition-all duration-300
      ${isOpen ? "w-64" : "w-20 md:w-64"}
    `}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Toggle */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 right-4 md:hidden z-50`}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>

        {/* Logo */}
        <div
          className={`
          h-[57px] flex items-center justify-center 
          border-b border-gray-200
        `}
        >
          {isOpen ? (
            <h2 className="text-xl font-bold">Admin Panel</h2>
          ) : (
            <h2 className="text-xl font-bold mr-4">A</h2>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center ${
                    isOpen ? "px-4" : "justify-center"
                  } py-2 hover:bg-gray-100 transition-colors`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
