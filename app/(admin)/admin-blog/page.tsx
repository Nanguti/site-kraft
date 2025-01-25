"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";

// Strict Type Definitions
type PostStatus = "draft" | "published" | "archived";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags?: string[];
  status: PostStatus;
}

// Utility Functions
const generateStableId = (seed: string): string => {
  // Use a more consistent ID generation method
  const hash = seed.split("").reduce((acc, char) => {
    return (acc << 5) - acc + char.charCodeAt(0);
  }, 0);
  return Math.abs(hash).toString(36);
};

const formatDate = (date: Date | string): string => {
  return new Date(date).toISOString().split("T")[0];
};

// PostModal Component
const PostModal: React.FC<{
  post: BlogPost | null;
  onClose: () => void;
  onSave: (post: BlogPost) => void;
}> = ({ post, onClose, onSave }) => {
  const [editedPost, setEditedPost] = useState<BlogPost>(
    post || {
      id: generateStableId("new-post"),
      title: "",
      author: "Current User",
      date: formatDate(new Date()),
      content: "",
      tags: [],
      status: "draft",
    }
  );

  const handleChange = (
    field: keyof BlogPost,
    value: string | string[] | PostStatus
  ) => {
    setEditedPost((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {post ? "Edit Post" : "Create New Post"}
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <X />
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={editedPost.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Content"
            value={editedPost.content}
            onChange={(e) => handleChange("content", e.target.value)}
            className="w-full p-2 border rounded h-40 dark:bg-gray-700 dark:text-white"
          />
          <select
            value={editedPost.status}
            onChange={(e) =>
              handleChange("status", e.target.value as PostStatus)
            }
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(editedPost)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogManagement: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<PostStatus | "all">("all");
  const [sortBy, setSortBy] = useState<keyof BlogPost>("date");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const ITEMS_PER_PAGE = 5;

  const initialPosts: BlogPost[] = [
    {
      id: generateStableId("first-post-2024-01-24"),
      title: "Modern Web Development Trends",
      author: "Tech Insights",
      date: "2024-01-24", // Use consistent date format
      content: "Exploring the latest trends in web development...",
      tags: ["web", "technology"],
      status: "published",
    },
    {
      id: generateStableId("second-post-2024-01-25"),
      title: "Design Systems Revolution",
      author: "Design Weekly",
      date: "2024-01-25", // Use consistent date format
      content: "How design systems transform UI/UX...",
      tags: ["design", "ui/ux"],
      status: "draft",
    },
  ];

  const [posts, setPosts] = useState<BlogPost[]>(() => initialPosts);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredAndSortedPosts = useMemo(() => {
    return posts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (filterStatus === "all" || post.status === filterStatus)
      )
      .sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        }

        return 0;
      });
  }, [posts, searchTerm, filterStatus, sortBy]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedPosts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredAndSortedPosts, currentPage]);

  const handleAddNew = useCallback(() => {
    setEditingPost(null);
    setIsModalOpen(true);
  }, []);

  const handleSave = useCallback((post: BlogPost) => {
    setPosts((current) =>
      post.id && current.some((p) => p.id === post.id)
        ? current.map((p) => (p.id === post.id ? post : p))
        : [...current, { ...post, id: post.id || generateStableId("new-post") }]
    );

    setIsModalOpen(false);
    setEditingPost(null);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setPosts((current) => current.filter((p) => p.id !== id));
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Blog Management
        </h1>
        <button
          onClick={handleAddNew}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg
           hover:bg-blue-700 transition-colors"
        >
          <Plus className="mr-2" /> New Post
        </button>
      </div>

      <div className="flex mb-6 space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg dark:bg-gray-800 dark:text-white
             dark:border-gray-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as BlogPost["status"] | "all")
          }
          className="p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          <option value="all">All Statuses</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {(
                ["title", "author", "date", "status"] as (keyof BlogPost)[]
              ).map((col) => (
                <th
                  key={col}
                  onClick={() => setSortBy(col)}
                  className="p-4 text-left text-gray-600 dark:text-gray-300 cursor-pointer
                   hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    {col.charAt(0).toUpperCase() + col.slice(1)}
                    <ArrowUpDown className="ml-2 text-gray-400" size={16} />
                  </div>
                </th>
              ))}
              <th className="p-4 text-center text-gray-600 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedPosts.map((post) => (
              <tr
                key={post.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50
                 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="p-4 text-gray-800 dark:text-white">
                  {post.title}
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {post.author}
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {post.date}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs uppercase font-semibold 
                      ${
                        post.status === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : post.status === "published"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:bg-blue-100 p-2 rounded dark:hover:bg-blue-900"
                      title="View"
                    >
                      <Eye />
                    </button>
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setIsModalOpen(true);
                      }}
                      className="text-green-500 hover:bg-green-100 p-2 rounded dark:hover:bg-green-900"
                      title="Edit"
                    >
                      <Edit />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded dark:hover:bg-red-900"
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

      <div className="flex justify-between items-center mt-6">
        <div className="text-gray-600 dark:text-gray-300">
          Page {currentPage} of{" "}
          {Math.ceil(filteredAndSortedPosts.length / ITEMS_PER_PAGE)}
        </div>
        <div className="flex space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            disabled={
              currentPage >=
              Math.ceil(filteredAndSortedPosts.length / ITEMS_PER_PAGE)
            }
            onClick={() => setCurrentPage((p) => p + 1)}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <PostModal
          post={editingPost}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPost(null);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default BlogManagement;
