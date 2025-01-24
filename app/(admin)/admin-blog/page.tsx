"use client";

import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

// Dummy data - replace with actual data fetching
const initialPosts = [
  {
    id: 1,
    title: "First Blog Post",
    author: "Admin",
    date: "2024-01-24",
  },
  {
    id: 2,
    title: "Second Blog Post",
    author: "Admin",
    date: "2024-01-25",
  },
];

const BlogManagement: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <Plus className="mr-2" /> Add New Post
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Author</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="p-3">{post.title}</td>
                <td className="p-3">{post.author}</td>
                <td className="p-3">{post.date}</td>
                <td className="p-3">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:bg-blue-100 p-2 rounded"
                      title="View"
                    >
                      <Eye />
                    </button>
                    <button
                      className="text-green-500 hover:bg-green-100 p-2 rounded"
                      title="Edit"
                    >
                      <Edit />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded"
                      title="Delete"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagement;
